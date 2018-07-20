const telephoneRegex = /(\+?54)?\s?(9)?\s?((\d){2,4})?\s?(15)?\s?(\d{8})/

function getProvince(telephone_number) {
  let province = "N/A";

  const code = telephoneRegex.exec(telephone_number)[3];

  if (code == '11') {
    province = "BA";
  }

  if (code == '362') {
    province = "Chaco"
  }

  if (code == '379') {
    province = "Corrientes"
  }

  return province;
}

export { telephoneRegex };
export { getProvince };