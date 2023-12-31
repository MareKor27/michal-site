import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.css";
import { TextBox } from "~/components/textbox/TextBox";
import styleGlobal from "~/Global.module.css";
import styleTextBox from "~/components/textbox/TextBox.module.css";

import useStyles from "~/hooks/useStyle";
import { Section } from "~/components/section/Section";

export function Contact() {
  const s = useStyles(style);
  const g2 = useStyles(styleGlobal);
  const styleTB = useStyles(styleTextBox);
  return (
    <Contener size="arranged-md">
      <Content clas={"content"}>
        <TextBox>
          <h1>Kontakt z FigowSki</h1>
          <p>
            <img
              className={s(`contentimg imgRight`)}
              src="public/images/gallery/galeria-foto-5.webp"
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nesciunt voluptatibus minus harum aperiam, necessitatibus sapiente
            iusto architecto nam distinctio dolores debitis earum asperiores,
            itaque exercitationem reiciendis aliquid tempore voluptate? Debitis
            esse tempore odio, atque fuga autem, deserunt ab cum blanditiis,
            consectetur possimus dolore natus ad culpa quis doloremque quod
            provident quos neque nesciunt et exercitationem! Quibusdam maxime
            pariatur nemo! Magnam iusto optio voluptas corporis doloribus fugit
            voluptatibus, laudantium nihil officiis expedita possimus adipisci
            similique, esse ea, reiciendis voluptate accusantium ullam soluta
            natus iure commodi distinctio doloremque! Temporibus, culpa
            reprehenderit. Qui ducimus minima dolores, reprehenderit cupiditate
            asperiores non recusandae quod sunt accusantium, aperiam ullam
            expedita repellendus quaerat officia voluptates tempore velit
            similique quo tenetur facere corporis enim nam.
          </p>
        </TextBox>
        <Section size={"body-arranged-md"} type={"1"}>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/icons/icon-pin.webp"></img>
                  </td>
                  <td>
                    <p>Strefa Ruchu ul. Drawska 22</p>
                    <p>02-202 Warszawa</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/icons/icon-clock.webp"></img>
                  </td>
                  <td>
                    <p>Godziny otwarcia:</p>
                    <p>Pon. - Pt.: 10:00 - 20:00</p>
                    <p>Sob.: 9:00 - 17:00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/icons/icon-email.webp"></img>
                  </td>
                  <td>
                    <p>
                      E-mail:
                      <br />
                      <a href="mailto:figowskisport@gmail.com">
                        figowskisport@gmail.com
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/icons/icon-phone.webp"></img>
                  </td>
                  <td>
                    <p>
                      Telefon:
                      <br /> <a href="m:+48517933264">+48 517 933 264</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/icons/icon-document.webp"></img>
                  </td>
                  <td>
                    <p>
                      REGON:
                      <br /> 384808813
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/icons/icon-document.webp"></img>
                  </td>
                  <td>
                    <p>
                      NIP:
                      <br /> 7471658760
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
        </Section>
        <TextBox className={"text-clear"}>
          <table className={g2(`contact-table`)}>
            <tbody>
              <tr>
                <td>
                  <img src="/images/icons/icon-card.webp"></img>
                </td>
                <td>
                  <p>Nr konta:</p>
                  <p>-- ---- ---- ---- ---- ---- ----</p>
                </td>
              </tr>
            </tbody>
          </table>
        </TextBox>
        <TextBox>
          <div className={styleTB(`map`)}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0450452839646!2d20.9562744!3d52.2062289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccaa5fc07595%3A0x43a0adedb664106a!2sDrawska%2022%2C%2002-202%20Warszawa!5e0!3m2!1spl!2spl!4v1699181558414!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
        </TextBox>
      </Content>
    </Contener>
  );
}
