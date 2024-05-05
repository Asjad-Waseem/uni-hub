import "@assets/styles/components/Footer.css";

const Footer = (): JSX.Element => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>Copyright© {date.getFullYear()} Uni Hub Pvt. Ltd. </p>
    </footer>
  );
};

export default Footer;
