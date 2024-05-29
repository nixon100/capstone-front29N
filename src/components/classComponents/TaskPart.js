import React, { useState } from "react";
import axios from "axios";
const TaskPart = (props) => {
  const [fsc, setFsc] = useState("");
  const [fdc, setFdc] = useState("");
  const [comment, setComment] = useState("");
  const [bsc, setBsc] = useState("");
  const [bdc, setBdc] = useState("");
  const [fsc2, setFsc2] = useState("");
  const [fdc2, setFdc2] = useState("");
  const [fsc3, setFsc3] = useState("");
  const [fdc3, setFdc3] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // console.log(input1);
  // console.log(input2);
  const handleSubmit = async () => {
    setIsFormSubmitted(true);
    // setClickS(true);
    // setMark(true);
    const formData = {
      frontEndSourceCode: fsc,
      frontEndDeployedUrl: fdc,
      frontEndSourceCode2: fsc2,
      frontEndDeployedUrl2: fdc2,
      day: props.data.title,
      comments: comment,
    };
    console.log(formData);
    try {
      // const response = await axios.post(
      //   "http://localhost:8800/api/class/submission",
      //   formData
      // );
const response = await axios.put(
        `http://localhost:8800/api/class/${props.data._id}`,
        formData
      );

      console.log(response.data);
      // setSubmission(response.data)
      // return response.data;
      // setFsc = "";
      // setFdc = "";
      // setFsc2 = "";
      // setFdc2 = "";
      // setComment = "";
      // setBsc = "";
      // setBdc = "";
      // setFsc3 = "";
      // setFdc3 = "";
      // Wait for the POST request to complete before calling getaxios
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div>
      <div class="session-area">
        <span
          const
          style={{
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          {props.data.title}
        </span>
        <br />
        {props.data.date_and_time}
        <hr />
        <div class="preread-head">Contents:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.content}
          </span>
        </div>
        <div class="preread-head mt-3">Pre-read:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.pre_read}
          </span>
        </div>
      </div>

      {(props.data.taskURL == "-" )|| (props.data.taskURL == "no task")? null : (
        <div>
          {" "}
          <div class="activity ml-1 mt-3 mb-2">Activities</div>
          <div class="mb-4">
            {" "}
            <div class="session-container">
              <div class="session-area">
                <div class="accordion">
                  <div class="d-flex justify-content-between">
                    <div style={{ "font-weight": "500", "font-size": "1rem" }}>
                      {props.data.taskURL}
                    </div>
                    <div>
                      <div class="row d-flex justify-content-between flex-nowrap mr-2">
                        <div class="task">Task</div>
                        <div class="ml-4 mt-1" type="button">
                          <div color="" class="sc-beqWaB ehMBSb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="10"
                              viewBox="0 0 16 10"
                              fill="none"
                              class="injected-svg"
                              data-src="/Icons/downArrow.svg"
                              // xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                d="M2 2L8 8L14 2"
                                stroke="#93A4B7"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="collapse">
                    <div class="card-body" style={{ "padding-bottom": "0px" }}>
                      <div class="tagsList">
                        <div class="tagTitle">Tags:</div>
                        <div class="tagItem">html</div>
                      </div>
                      <div class="p-0">
                        <form autocomplete="off">
                          <div class="task-area" style={{ padding: "16px" }}>
                            <div class="submission">
                              {props.taskSub3 ||
                              props.taskSub2 ||
                              props.taskSub4 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setFsc(e.target.value)
                                          }
                                          // value={fsc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          // value={fdc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {props.taskSub2 ||
                              props.taskSub4 ||
                              props.taskSub8 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            {props.taskSub2 || props.taskSub4 ? setFsc2(e.target.value):setFsc(e.target.value)}
                                          }
                                          // value={props.taskSub2 || props.taskSub4 ? fsc2:fsc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            {props.taskSub2 || props.taskSub4 ? setFdc2(e.target.value):setFdc(e.target.value)}
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          // value={props.taskSub2 || props.taskSub4 ? fdc2:fdc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}

                              {props.taskSub1 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setFsc(e.target.value)
                                          }
                                          // value={props.data.frontEndSourceCode}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}

                              {props.taskSub4 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setFsc3(e.target.value)
                                          }
                                          // value={fsc3}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc3(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          // value={fdc3}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}
                              {props.taskSub5 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          // value={bsc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}

                              {props.taskSub6 || props.taskSub8 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          // value={bsc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setBdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          // value={bdc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}

                              {props.taskSub7 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          // value={bsc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          // value={fdc}
                                          disabled={isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}
                              <label
                                for="comments"
                                className="label-style mb-0"
                                // {...(props.taskSub0 ? { hidden: true } :{} )}
                              >
                                Comments
                              </label>
                              <div
                                // {...(props.taskSub0 ? { hidden: true } : {})}
                              >
                                <input
                                  className="formInputs"
                                  name="comments"
                                  placeholder="leave your comments here"
                                  onChange={(e) => setComment(e.target.value)}
                                  // value={comment}
                                  disabled={isFormSubmitted}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-end"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="btn submit-btn mb-3"
                  type="submit"
                  disabled=""
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPart;
