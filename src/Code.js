function doGet(e) {
  const template = HtmlService.createTemplateFromFile("Index");

  return template
    .evaluate()
    .setTitle("ระบบประเมินผลผผู้ปฏิบัติงาน KNSchool")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}
