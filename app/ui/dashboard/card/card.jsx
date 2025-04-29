import { MdCircle, MdMoreHoriz } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          {/* <div className={styles.columnContainer}> */}
          <div className={styles.inlineFlex}>
            {item.icon} {item.title}
          </div>

          {/* </div> */}
          <div>
            <MdMoreHoriz />
          </div>
        </div>
        <div className={styles.rowContainer1}>
          <div className={styles.detail}>{item.text}</div>
          <div
            className={styles.box}
            style={{
              backgroundColor: item.bgcolor,
              border: item.border,
              color: item.color,
            }}
          >
            {item.subiconposition === "before" && item.subicon}
            {item.change}
            {item.subiconposition === "after" && item.subicon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
{
  /* <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div> */
}

{
  /* <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <MdVisibility /> live Volts
        </div>
      </div>
      <div className={styles.columnContainer}>
        <MdMoreVert />
      </div> */
}
