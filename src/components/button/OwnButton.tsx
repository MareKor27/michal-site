import style from "~/components/button/OwnButton.module.css";

type OwnButton = {
  link: string;
  text: string;
};

export function OwnButton({ link, text }: OwnButton) {
  return (
    <a className={style["linked-button"]} href={`/${link}`}>
      {text}
    </a>
  );
}
