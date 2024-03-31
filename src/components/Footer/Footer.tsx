import "./footer.scss";

export default function Footer() {
  const date = new Date().getFullYear();
  return <div className="footer">Copyright &copy; Brainster {date}</div>;
}
