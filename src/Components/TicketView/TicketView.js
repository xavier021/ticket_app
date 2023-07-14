import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TicketView.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUserAlt,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import TextAreaUI from "../UI/TextArea";
import ButtonUI from "../UI/Button";
import CommentEntries from "./CommentEntries";

export default function TicketView() {

  const [title, setTitle] = useState("");
  const [ticketNum, setTicketNum] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const [info, setInfo] = useState("");
  const [assignee, setAssignee] = useState("");

  const [newComment, setNewComment] = useState("");
  const [getComment, setGetComment] = useState([]);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicketData = async () => {
      await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5001/api/tickets/ticket/" + id,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.ticket[0]);
            const ticket = res.data.ticket[0];
            setTitle(ticket.subject);
            setUser(ticket.users);
            setTicketNum(id);
            setDate(ticket.created_at);
            setStatus(ticket.name);
            setInfo(ticket.content);
            setAssignee(ticket.admin);
          }
        })
        .catch((e) => {
          console.log(e);
        });

      await axios
        .get("http://localhost:5001/api/tickets/getnotes/" + id, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            setGetComment(res.data.note);
            console.log(getComment);
            setCommentsLoaded(true);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchTicketData();
  }, [commentsLoaded]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(id);

    if (newComment != "") {
      const sendComment = async () => {
        await axios.post(
          "http://localhost:5001/api/tickets/createnote",
          {
            ticketId: id,
            content: newComment,
          },
          { withCredentials: true }
        );
        setNewComment("");

        await axios
          .get("http://localhost:5001/api/tickets/getnotes/" + id, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status === 200) {
              setGetComment(res.data.note);
              setCommentsLoaded(true);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      };

      sendComment();
    }

  };

  const handleCommentCancel = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <div>
      <div className="ticket">
        {/* ticket header */}
        <div className="ticket-container">
          <div className="ticket-header-info">
            <div>
              <h3 className="header-info header-title">{title}</h3>
              <span className="header-info">
                <FontAwesomeIcon icon={faFileAlt} /> Incident {ticketNum}
              </span>
              <span className="header-info lbl">{date}</span>
            </div>
            <div className="ticket-header-status header-info">
              {status} <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="ticket-info">
            <div className="user-info">
              <div className="user-icon">
                <FontAwesomeIcon icon={faUserAlt} color="gray" size="3x" />
              </div>
              <div>
                <label className="user-lb">
                  <label>User</label>
                  <span>{user}</span>
                </label>
              </div>
            </div>
            <div className="ticket-info-body">
              <span className="lbl">Description</span>
              <p className="desc">{info}</p>
              Lorem ipsum dolor sit amet, id sed scripta repudiandae, sea no
              laoreet noluisse. Ne errem aliquid accumsan quo, id paulo possit
              omittantur eam. Per ei probo posidonium, vel ex ferri ubique. Eam
              ex brute primis officiis, cu his malis scaevola periculis, ex
              idque repudiare dissentiet mei. Volutpat accusamus ex pri, dicat
              platonem ei has. Case tacimates id sed, argumentum signiferumque
              te sit. Te ius tamquam civibus, et sea accusam conceptam. Modus
              detracto consectetuer ut duo, ex per maiorum inimicus
              voluptatibus. Pri at sumo everti sententiae. Id modo nostrud
              officiis ius, cu nec summo complectitur. Quo ex novum facilisi, et
              magna omnium cotidieque per. Probatus facilisi omittantur per no.
              Has oportere principes voluptatibus ne. Id justo antiopam
              instructior eum. idisse corrumpit eum at, sint habemus epicuri vel
              et. Eos ea tempor probatus, nostrud aliquid ne has. Quando quidam
              utamur ea duo. Vel cu iuvaret percipitur. No prima hendrerit vix.
              Magna percipit antiopam ut vim. Eos tempor rationibus ex. Nec
              feugiat saperet detraxit an, mei assum ornatus ut. His ex everti
              explicari suscipiantur. Pri civibus suscipit scripserit eu. His
              quando doctus id, at ius denique epicuri. Te nec quot nostrud
              eloquentiam. Et sea scaevola verterem, est mazim aeque civibus et,
              iusto clita in eos. Essent corrumpit qui ei, hinc inani aliquip ne
              nec. At omnesque detraxit mnesarchum qui. Lorem ipsum dolor sit
              amet, id sed scripta repudiandae, sea no laoreet noluisse. Ne
              errem aliquid accumsan quo, id paulo possit omittantur eam. Per ei
              probo posidonium, vel ex ferri ubique. Eam ex brute primis
              officiis, cu his malis scaevola periculis, ex idque repudiare
              dissentiet mei. Volutpat accusamus ex pri, dicat platonem ei has.
              Case tacimates id sed, argumentum signiferumque te sit. Te ius
              tamquam civibus, et sea accusam conceptam. Modus detracto
              consectetuer ut duo, ex per maiorum inimicus voluptatibus. Pri at
              sumo everti sententiae. Id modo nostrud officiis ius, cu nec summo
              complectitur. Quo ex novum facilisi, et magna omnium cotidieque
              per. Probatus facilisi omittantur per no. Has oportere principes
              voluptatibus ne. Id justo antiopam instructior eum. Vidisse
              corrumpit eum at, sint habemus epicuri vel et. Eos ea tempor
              probatus, nostrud aliquid ne has. Quando quidam utamur ea duo. Vel
              cu iuvaret percipitur. No prima hendrerit vix. Magna percipit
              antiopam ut vim. Eos tempor rationibus ex. Nec feugiat saperet
              detraxit an, mei assum ornatus ut. His ex everti explicari
              suscipiantur. Pri civibus suscipit scripserit eu. His quando
              doctus id, at ius denique epicuri. Te nec quot nostrud
              eloquentiam. Et sea scaevola verterem, est mazim aeque civibus et,
              iusto clita in eos. Essent corrumpit qui ei, hinc inani aliquip ne
              nec. At omnesque detraxit mnesarchum qui. Lorem ipsum dolor sit
              amet, id sed scripta repudiandae, sea no laoreet noluisse. Ne
              errem aliquid accumsan quo, id paulo possit omittantur eam. Per ei
              probo posidonium, vel ex ferri ubique. Eam ex brute primis
              officiis, cu his malis scaevola periculis, ex idque repudiare
              dissentiet mei. Volutpat accusamus ex pri, dicat platonem ei has.
              Case tacimates id sed, argumentum signiferumque te sit. Te ius
              tamquam civibus, et sea accusam conceptam. Modus detracto
              consectetuer ut duo, ex per maiorum inimicus voluptatibus. Pri at
              sumo everti sententiae. Id modo nostrud officiis ius, cu nec summo
              complectitur. Quo ex novum facilisi, et magna omnium cotidieque
              per. Probatus facilisi omittantur per no. Has oportere principes
              voluptatibus ne. Id justo antiopam instructior eum. Vidisse
              corrumpit eum at, sint habemus epicuri vel et. Eos ea tempor
              probatus, nostrud aliquid ne has. Quando quidam utamur ea duo. Vel
              cu iuvaret percipitur. No prima hendrerit vix. Magna percipit
              antiopam ut vim. Eos tempor rationibus ex. Nec feugiat saperet
              detraxit an, mei assum ornatus ut. His ex everti explicari
              suscipiantur. Pri civibus suscipit scripserit eu. His quando
              doctus id, at ius denique epicuri. Te nec quot nostrud
              eloquentiam. Et sea scaevola verterem, est mazim aeque civibus et,
              iusto clita in eos. Essent corrumpit qui ei, hinc inani aliquip ne
              nec. At omnesque detraxit mnesarchum qui. Lorem ipsum dolor sit
              amet, id sed scripta repudiandae, sea no laoreet noluisse. Ne
              errem aliquid accumsan quo, id paulo possit omittantur eam. Per ei
              probo posidonium, vel ex ferri ubique. Eam ex brute primis
              officiis, cu his malis scaevola periculis, ex idque repudiare
              dissentiet mei. Volutpat accusamus ex pri, dicat platonem ei has.
              Case tacimates id sed, argumentum signiferumque te sit. Te ius
              tamquam civibus, et sea accusam conceptam. Modus detracto
              consectetuer ut duo, ex per maiorum inimicus voluptatibus. Pri at
              sumo everti sententiae. Id modo nostrud officiis ius, cu nec summo
              complectitur. Quo ex novum facilisi, et magna omnium cotidieque
              per. Probatus facilisi omittantur per no. Has oportere principes
              voluptatibus ne. Id justo antiopam instructior eum. Vidisse
              corrumpit eum at, sint habemus epicuri vel et. Eos ea tempor
              probatus, nostrud aliquid ne has. Quando quidam utamur ea duo. Vel
              cu iuvaret percipitur. No prima hendrerit vix. Magna percipit
              antiopam ut vim. Eos tempor rationibus ex. Nec feugiat saperet
              detraxit an, mei assum ornatus ut. His ex everti explicari
              suscipiantur. Pri civibus suscipit scripserit eu. His quando
              doctus id, at ius denique epicuri. Te nec quot nostrud
              eloquentiam. Et sea scaevola verterem, est mazim aeque civibus et,
              iusto clita in eos. Essent corrumpit qui ei, hinc inani aliquip ne
              nec. At omnesque detraxit mnesarchum qui.
            </div>
            <div className="ticket-info-assignee">
              <label className="lbl">Assignee</label>
              {assignee}
            </div>
          </div>
        </div>

        <div className="ticket-comment">
          <h4>Comment Section</h4>
          {/* Submit Entry */}
          <div className="new-comment">
            <TextAreaUI
              placeholder="Add a comment"
              value={newComment}
              handleChange={(e) => {
                setNewComment(e.target.value);
              }}
            />
            <div className="comment-buttons">
              <ButtonUI
                className="post-comment"
                onClick={handleCommentSubmit}
                description="Post"
              />
              <ButtonUI
                className="post-comment-cancel"
                onClick={handleCommentCancel}
                description="Cancel"
              />
            </div>
          </div>
          {/* Entries */}
          <div className="comment-section">
            {getComment.map((comment, i) => {
              return (
                <CommentEntries
                  user={comment.user}
                  time={comment.created_at}
                  content={comment.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
