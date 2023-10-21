// react
import PropTypes from "prop-types";

// images
import visaCardImage from "./../../../assets/logo/visa.svg";
import masterCardImage from "./../../../assets/logo/mastercard.svg";

const PaymentOptionLogos = ({ modifyClasses = "" }) => {
  return (
    <div className={`${modifyClasses}`}>
      <p className="font-bold text-primary mb-2">We accept</p>
      <div className="flex items-center">
        <img
          className="block w-[3rem]"
          src={visaCardImage}
          alt="visa card icon"
        />
        <img
          className="block w-[3rem]"
          src={masterCardImage}
          alt="master card icon"
        />
      </div>
    </div>
  );
};

PaymentOptionLogos.propTypes = {
  modifyClasses: PropTypes.string,
};

export default PaymentOptionLogos;
