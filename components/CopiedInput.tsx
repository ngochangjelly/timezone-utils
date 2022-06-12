import React, { ReactComponentElement } from "react";
import useCopy from "use-copy";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const BoldText = styled.p`
  font-size: 1.5em;
  font-weight: bold
`;
export default function ClickToCopyInput({ text = '', isBold, suffix }: { text: string, isBold?: boolean, suffix?: string }) {
  const [copied, copy, setCopied] = useCopy(text);
  const notify = () => toast(`Copied ${text} to clipboard!`);
  const copyText = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
      notify()
    }, 0);
  };

  return (
    <>
      <ToastContainer />
      <p>
        <a onClick={copyText}>
          {isBold ? <BoldText>{text}</BoldText> : text}
        </a>  {suffix && suffix}
      </p>
    </>
  );
}