import React from 'react';
import '../styles/org-container.css';


class OrgContainer extends React.Component {
    render() {
      return (
        <mainbody className='main-body'>
        <maincontent className='main-content'>
        </maincontent>
        <orgContainer className='org-container'>
        <ufc className='ufc-logo'> UFC </ufc>
        <cagewarriors className='cage-warriors-logo'> Cage Warriors </cagewarriors>
        <onefc className='one-fc-logo'> One FC </onefc>
        <glory className='glory-logo'> Glory </glory>
        <pfl className='pfl-logo'> PFL </pfl>
        <bellator className='bellator-logo'> Bellator </bellator>
    </orgContainer>
    </mainbody>
  )};
}

export default OrgContainer;
