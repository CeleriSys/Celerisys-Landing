const CONFIG = Object.freeze({
  ownerEmail: 'celerisys@outlook.com',
  senderName: 'Celerisys',
  timeZone: 'America/Lima',
  whatsappUrl: 'https://wa.me/51935875743',
});

function doPost(event) {
  try {
    const data = normalizeSubmission(event && event.parameter ? event.parameter : {});

    if (data.website) return jsonResponse({ ok: true });
    validateSubmission(data);

    const submittedAt = Utilities.formatDate(
      new Date(),
      CONFIG.timeZone,
      "dd/MM/yyyy 'a las' HH:mm:ss"
    );

    MailApp.sendEmail({
      to: CONFIG.ownerEmail,
      replyTo: data.email,
      name: CONFIG.senderName,
      subject: `Nueva solicitud de ${data.name}${data.company ? ` — ${data.company}` : ''}`,
      body: ownerPlainText(data, submittedAt),
      htmlBody: ownerHtml(data, submittedAt),
    });

    MailApp.sendEmail({
      to: data.email,
      replyTo: CONFIG.ownerEmail,
      name: CONFIG.senderName,
      subject: 'Recibimos tu solicitud — Celerisys',
      body: clientPlainText(data),
      htmlBody: clientHtml(data),
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'No se pudo procesar la solicitud.' });
  }
}

function normalizeSubmission(parameters) {
  const value = (name, maxLength) => String(parameters[name] || '').trim().slice(0, maxLength);
  return {
    name: value('name', 80),
    company: value('company', 100),
    email: value('email', 160).toLowerCase(),
    phone: value('phone', 24),
    interest: value('interest', 120),
    message: value('message', 2000),
    landingPage: value('landing_page', 500),
    utmSource: value('utm_source', 120),
    utmMedium: value('utm_medium', 120),
    utmCampaign: value('utm_campaign', 160),
    utmContent: value('utm_content', 160),
    formStartedAt: value('form_started_at', 20),
    website: value('website', 200),
  };
}

function validateSubmission(data) {
  if (data.name.length < 2) throw new Error('Invalid name');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Invalid email');
  if (data.phone && !/^[+0-9() .-]{7,24}$/.test(data.phone)) throw new Error('Invalid phone');
  if (data.message.length < 20) throw new Error('Invalid message');

  const startedAt = Number(data.formStartedAt);
  if (startedAt && Date.now() - startedAt < 1500) throw new Error('Submission too fast');
}

function ownerHtml(data, submittedAt) {
  const rows = [
    ['Nombre', data.name],
    ['Empresa', data.company || 'No indicada'],
    ['Correo', data.email],
    ['WhatsApp', data.phone || 'No indicado'],
    ['Interés', data.interest || 'No indicado'],
    ['Mensaje', data.message],
    ['Fecha y hora (Perú)', submittedAt],
    ['Página de origen', data.landingPage || 'No disponible'],
    ['Campaña', campaignLabel(data)],
  ];

  return emailShell(`
    <p style="margin:0 0 20px;color:#566879;font-size:15px;line-height:1.6;">
      Recibiste una nueva solicitud desde la landing page. Puedes responder directamente a este correo para contactar a ${escapeHtml(data.name)}.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${rows.map(([label, value]) => emailRow(label, value)).join('')}
    </table>
  `, 'Nueva solicitud comercial', 'Formulario de contacto');
}

function clientHtml(data) {
  return emailShell(`
    <p style="margin:0 0 16px;color:#0b2135;font-size:18px;font-weight:700;">Hola, ${escapeHtml(data.name)}.</p>
    <p style="margin:0 0 18px;color:#566879;font-size:15px;line-height:1.7;">
      Recibimos tu solicitud correctamente. Nuestro equipo revisará la información y te responderá personalmente dentro de un día hábil.
    </p>
    <div style="margin:22px 0;padding:16px 18px;border-left:3px solid #0967c2;border-radius:8px;background:#f3f6fa;color:#566879;font-size:14px;line-height:1.6;">
      <strong style="color:#0b2135;">Tu consulta:</strong><br>${escapeHtml(data.message)}
    </div>
    <p style="margin:0;color:#566879;font-size:14px;line-height:1.7;">
      Si deseas agregar algún detalle, responde este correo o <a href="${CONFIG.whatsappUrl}" style="color:#0967c2;font-weight:700;">escríbenos por WhatsApp</a>.
    </p>
  `, 'Gracias por contactarnos', 'Confirmación de solicitud');
}

function emailShell(content, title, eyebrow) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#eef3f8;font-family:Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef3f8;"><tr><td align="center" style="padding:32px 14px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;overflow:hidden;border:1px solid #dce5ee;border-radius:16px;background:#ffffff;box-shadow:0 12px 34px rgba(11,33,53,.08);">
        <tr><td style="padding:26px 30px;background:#0b2135;">
          <div style="color:#9bc5ff;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">${eyebrow}</div>
          <h1 style="margin:8px 0 0;color:#ffffff;font-size:25px;line-height:1.2;">${title}</h1>
        </td></tr>
        <tr><td style="padding:28px 30px;">${content}</td></tr>
        <tr><td style="padding:18px 30px;border-top:1px solid #e5ebf1;color:#73829a;font-size:12px;line-height:1.5;">Celerisys · Automatización y software a medida en Perú</td></tr>
      </table>
    </td></tr></table>
  </body></html>`;
}

function emailRow(label, value) {
  return `<tr>
    <td style="width:34%;padding:12px 10px;border-bottom:1px solid #e5ebf1;color:#73829a;font-size:12px;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:12px 10px;border-bottom:1px solid #e5ebf1;color:#0b2135;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

function ownerPlainText(data, submittedAt) {
  return [
    'Nueva solicitud desde Celerisys',
    '',
    `Nombre: ${data.name}`,
    `Empresa: ${data.company || 'No indicada'}`,
    `Correo: ${data.email}`,
    `WhatsApp: ${data.phone || 'No indicado'}`,
    `Interés: ${data.interest || 'No indicado'}`,
    `Mensaje: ${data.message}`,
    `Fecha y hora (Perú): ${submittedAt}`,
    `Página de origen: ${data.landingPage || 'No disponible'}`,
    `Campaña: ${campaignLabel(data)}`,
  ].join('\n');
}

function clientPlainText(data) {
  return `Hola, ${data.name}.\n\nRecibimos tu solicitud correctamente. Nuestro equipo la revisará y te responderá personalmente dentro de un día hábil.\n\nTu consulta:\n${data.message}\n\nSi deseas agregar algún detalle, responde este correo o escríbenos por WhatsApp: ${CONFIG.whatsappUrl}\n\nCelerisys`;
}

function campaignLabel(data) {
  const values = [data.utmSource, data.utmMedium, data.utmCampaign, data.utmContent].filter(Boolean);
  return values.length ? values.join(' / ') : 'Tráfico directo';
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
