import Image from "next/image";

export default function OutputPage() {
  // Mock data
  const first = "John";
  const last = "Doe";
  const position = "Software Engineer";
  const s3url = "https://example.com/image.jpg";
  const phone = "+1234567890";
  const email = "example@example.com";
  const linkedin = "https://www.linkedin.com/in/johndoe";
  const github = "https://github.com/johndoe";
  const twitter = "https://twitter.com/johndoe";
  const facebook = "https://www.facebook.com/johndoe";
  const instagram = "https://www.instagram.com/johndoe";

  return (
    <div>
      <table
        data-name="signature"
        width="400"
        border={0}
        cellSpacing={0}
        cellPadding={0}
        style={{
          width: "400px",
          fontFamily: "'Arial', sans-serif",
          borderCollapse: "collapse",
          WebkitTextSizeAdjust: "none",
        }}
      >
        <tbody>
          <tr>
            <td width="400" style={{ paddingBottom: "7px" }}>
              <table border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        width: "110px",
                        paddingRight: "20px",
                        paddingTop: "5px",
                      }}
                      valign="middle"
                    >
                      <Image
                        src="https://placehold.co/600x400/png"
                        alt="photo"
                        width="110"
                        height="110"
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td
                      style={{
                        paddingLeft: "15px",
                        borderLeft: "2px solid #050e69",
                        width: "1px",
                      }}
                    >
                      <table
                        style={{ width: "223px" }}
                        border={0}
                        cellSpacing="0"
                        cellPadding="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                paddingBottom: "5px",
                                lineHeight: "12pt",
                                paddingTop: "5px",
                                width: "170px",
                              }}
                            >
                              <p style={{ margin: "0" }}>
                                <span
                                  style={{
                                    fontFamily: "'Arial', sans-serif",
                                    fontSize: "14pt",
                                    color: "#050e69",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {first} {last}
                                </span>
                              </p>
                              <p style={{ margin: "0" }}>
                                <span
                                  style={{
                                    fontFamily: "'Arial', sans-serif",
                                    fontSize: "10pt",
                                    color: "#0d1438",
                                  }}
                                >
                                  {position}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                lineHeight: "13pt",
                                paddingBottom: "2px",
                                width: "170px",
                              }}
                            >
                              <p style={{ margin: "0" }}>
                                <Image
                                  style={{
                                    border: "0",
                                    verticalAlign: "middle",
                                  }}
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/cell.png"
                                  alt="cell"
                                  width="13"
                                  height="10"
                                />
                                &nbsp;&nbsp;
                                <a
                                  style={{
                                    fontFamily: "'Arial', sans-serif",
                                    fontSize: "10pt",
                                    color: "#0d1438",
                                    textDecoration: "none",
                                    fontWeight: "normal",
                                  }}
                                  href="tel:{{ phone }}"
                                  target="_blank"
                                >
                                  {phone}
                                </a>
                              </p>
                              <p style={{ margin: "0" }}>
                                <Image
                                  style={{
                                    border: "0",
                                    verticalAlign: "middle",
                                  }}
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/email.png"
                                  alt="email"
                                  width="13"
                                  height="10"
                                />
                                &nbsp;&nbsp;
                                <a
                                  style={{
                                    fontFamily: "'Arial', sans-serif",
                                    fontSize: "10pt",
                                    color: "#0d1438",
                                    textDecoration: "none",
                                    fontWeight: "normal",
                                  }}
                                  href="email:{{ email }}"
                                  target="_blank"
                                >
                                  {email}
                                </a>
                              </p>
                              <p style={{ margin: "0" }}>
                                <Image
                                  style={{
                                    border: "0",
                                    verticalAlign: "middle",
                                  }}
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/website.png"
                                  alt="website"
                                  width="13"
                                  height="13"
                                />
                                &nbsp;&nbsp;
                                <a
                                  style={{
                                    fontFamily: "'Arial', sans-serif",
                                    fontSize: "10pt",
                                    color: "#0d1438",
                                    textDecoration: "none",
                                    fontWeight: "normal",
                                  }}
                                  href="http://www.aquia.us/"
                                  target="_blank"
                                >
                                  www.aquia.us
                                </a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: "7px", width: "170px" }}>
                              <a
                                href="{{ linkedin }}"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Image
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/linkedin.png"
                                  alt="linkedin"
                                  width="20"
                                  height="20"
                                />
                              </a>
                              <a
                                href="{{ github }}"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Image
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/github.png"
                                  alt="github"
                                  width="20"
                                  height="20"
                                />
                              </a>
                              <a
                                href="{{ twitter }}"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Image
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/twitter.png"
                                  alt="twitter"
                                  width="20"
                                  height="20"
                                />
                              </a>
                              <a
                                href="{{ facebook }}"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Image
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/facebook.png"
                                  alt="facebook"
                                  width="20"
                                  height="20"
                                />
                              </a>
                              <a
                                href="{{ instagram }}"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                <Image
                                  src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/instagram.png"
                                  alt="instagram"
                                  width="20"
                                  height="20"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td
                      style={{ textAlign: "right", width: "85px" }}
                      valign="middle"
                    >
                      <a href="http://www.aquia.us/" target="_blank">
                        <Image
                          src="https://aquiasiggen-python-zappa.s3.amazonaws.com/images/logo.png"
                          alt="logo"
                          width="100"
                          height="100"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
