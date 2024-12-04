import React, {useState, useEffect} from "react";
import { ReactTerminal } from "react-terminal";

const Shellterm = () => {

  const [isroot, setisroot] = useState(false);
  const [currentdir, setcurrentdir] = useState("/home/ghoulss");
  const [cliprompt, setcliPrompt] = useState("ghoulss@PariahOS> ");
  const [welcomeMessage, setwelcomeMessage] = useState(
    <>       
    Alaya Vijnana System V1.4 <br/>
    ASW-G-08:-&#91;Name Redacted&#93; <br/> 
    <br/>
    Potato CLI here. Check out a better&nbsp;
    <a style={{color:"red", textDecoration: "none"}}   
       target="_blank"
       rel="noopener noreferrer" 
       href="https://gh0ulss.github.io/Cli-Portfolio/">one</a> <br/>
    Type 'help' to see available commands. Press 'Esc' to quit terminal. <br/>
    </>
  );
  
  const darkthemeextend = {
     errorColor: "#ff0000" 
  }

  const availablecmd = {
    help: (input) => {
      if (!input) {
        return (
          <>
          Available commands: <br/>
          <br/>
          whoami <br/>
          pwd <br/>
          cat  &#91;filename&#93;<br/>
          echo &#91;args&#93;<br/>
          about <br/>
          uname <br/>
          ls <br/>
          lshw <br/>
          cd <br/>
          sudo <br/>
          exit <br/>
          <br/>
          Try "help -all" for more detailed list of commands
          </>
        );
      }
      else if (input === "-all")
      {
        return (
          <>
          Available commands: <br/>
          <br/>
          whoami <br/>
          pwd <br/>
          cat  &#91;filename&#93;<br/>
          echo &#91;args&#93;<br/>
          about <br/>
          uname <br/>
          &nbsp;&nbsp;&nbsp;&nbsp; -a all <br/>
          &nbsp;&nbsp;&nbsp;&nbsp; -r kernel release <br/>
          ls <br/>
          &nbsp;&nbsp;&nbsp;&nbsp; -l more verbose <br/>
          &nbsp;&nbsp;&nbsp;&nbsp; -lh more verbose and human-readable <br/>
          lshw <br/>
          cd <br/>
          sudo <br/>
          exit <br/>
          </>
        );
      }
      else
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Invalid Flag <br/>
             Check "help -all" to see the available flags
          </span>
        );
      }
    },
    whoami: () => {
      if (isroot === false)
      {
        return "ghoulss";
      }
      else if(isroot === true)
      {
        return "root";
      }
    },
    pwd: () => (
        <span>{currentdir}</span>
    ),
    exit: () => {
      if (isroot === true)
      {
        setisroot(false);
        setcliPrompt("ghoulss@PariahOS> ");
        setcurrentdir("/home/ghoulss");
        setwelcomeMessage(
          <>       
          Alaya Vijnana System V1.4 <br/>
          ASW-G-08:-&#91;Name Redacted&#93;<br/> 
          <br/>
          Type 'help' to see available commands. <br/>
          </>
        );
      }
    },
    cd: (input) => {
      if (!input)
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Please specify a directory<br/>
          </span>
        );
      }
      else if (input === "/root" && isroot === true)
      {
          setcurrentdir("/root");
      }
      else
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Permission Denied<br/>
          </span>
        );
      }
    },
    cat: (input) => {
      if (!input)
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Please specify a file to read<br/>
          </span>
        );
      }
      else if (input === "About.md")
      {
        return (
          <>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>
           in culpa qui officia deserunt mollit anim id est laborum.
          </>
        )
      }
      else if (input === "Experience.md")
      {
        return (
          <>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>
           in culpa qui officia deserunt mollit anim id est laborum.
          </>
        )
      }
      else if (input === "Projects.md")
      {
        return (
          <>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br/>
           in culpa qui officia deserunt mollit anim id est laborum.
          </>
        )
      }
      else if (input === "Lessons.md" && currentdir === "/root")
        {
          return (
            <>
             Do not assume anything.<br/>
             <br/>
             Putting pride and personal glory above duty and everything else is a precursor to a downfall that is to come. <br/>
             <br/>
             In CS, CyberSecurity and Data Science, University rankings means nothing, only the relevance <br/> 
             and how up to date the courses are truly matters.
            </>
          )
        }
      else
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: File does not exist 
          </span>
        );
      }
    },
    about: "Hi, I am Min and I have a strong passion in CyberSecurity.",
    /* DEPRECATED 
    lshw: (
    <>
    Host Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desktop-C7F58157 <br/>
    OS Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PariahOS <br/>
    OS Version:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V3.4 Build 2104 <br/>
    OS Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hendson Technology <br/>
    OS Configuration:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lightweight Hosted Workstation <br/>
    OS Build Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiprocessor Free <br/>
    Product ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A43FE6-BE23D9-F38EA1 <br/>
    System Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orion Corporation <br/>
    System Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verion TS-23-415 <br/>
    System Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;64-bit PC <br/>
    Processor:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 Processor Installed. <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#91;01&#91;: Processor	Intel Core i7-10750H CPU @ 2.60GHz, 2592 Mhz, 6 Cores, 12 Logical Processors <br/>
    BIOS Version:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furios Logic V6.32 <br/>
    Root Directory:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ <br/>
    Boot Device:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/dev/sda1 <br/>
    Total Physical Memory:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16,027 MB
    </>
    ),
    */
    lshw: (
      <table style={{width: '100%'}}>
        <tbody>
          <tr>
            <td>Host Name:</td>
            <td>Desktop-C7F58157</td>
          </tr>
          <tr>
            <td>OS Name:</td>
            <td>PariahOS</td>
          </tr>
          <tr>
            <td>OS Version:</td>
            <td>V3.4 Build 2104</td>
          </tr>
          <tr>
            <td>OS Manufacturer:</td>
            <td>Hendson Technology</td>
          </tr>
          <tr>
            <td>OS Configuration:</td>
            <td>Lightweight Hosted Workstation</td>
          </tr>
          <tr>
            <td>OS Build Type:</td>
            <td>Multiprocessor Free</td>
          </tr>
          <tr>
            <td>Product ID:</td>
            <td>A43FE6-BE23D9-F38EA1</td>
          </tr>
          <tr>
            <td>System Manufacturer:</td>
            <td>Orion Corporation</td>
          </tr>
          <tr>
            <td>System Model:</td>
            <td>Verion TS-23-415</td>
          </tr>
          <tr>
            <td>System Type:</td>
            <td>64-bit PC</td>
          </tr>
          <tr>
            <td>Processor:</td>
            <td>1 Processor Installed.</td>
          </tr>
          <tr>
            &nbsp;&nbsp;<td>&#91;01&#93;:</td>
            <td>Processor Eilix Trex u5-6307B CPU @ 2.30GHz, 2423 Mhz, 4 Cores, 8 Logical Processors</td>
          </tr>
          <tr>
            <td>BIOS Version:</td>
            <td>Furios Logic V6.32</td>
          </tr>
          <tr>
            <td>Root Directory:</td>
            <td>/</td>
          </tr>
          <tr>
            <td>Boot Device:</td>
            <td>/dev/sda1</td>
          </tr>
          <tr>
            <td>Total Physical Memory:</td>
            <td>16,027 MB</td>
          </tr>
        </tbody>
      </table>
    ),    
    echo: (input) => {
      if (!input)
      {
        return " ";
      }
      else if (input)
      {
        return input;
      }
    },
    ls: (input) => {
      if (!input) { 
        if (currentdir === "/root")
        {
            return "Lessons.md";
        }
        return "About.md Experience.md Projects.md";
      }
      else if (input === "-l")
      {
        if (currentdir === "/root")
          {
            return (
              <>
              drwxr-xr-x 43 root root 534 Nov 24 2024 Lessons.md 
              </>
            );
          }
        return (
          <>
          drwxr-xr-x 43 ghoulss ghoulss 234 Nov 24 2024 About.md <br/>
          drwxr-xr-x  6 ghoulss ghoulss 1420 Nov 24 2024 Experience.md <br/>
          drwxr-xr-x 12 ghoulss ghoulss 1652 Nov 25 2024 Projects.md 
          </>
        );
      }
      else if (input === "-lh")
      {
        if (currentdir === "/root")
        {
          return (
            <>
            drwxr-xr-x 43 root root 460K Nov 24 2024 Lessons.md 
            </>
          );
        }
        return (
          <>
          drwxr-xr-x 43 ghoulss ghoulss 190K  Nov 24 2024 About.md <br/>
          drwxr-xr-x  6 ghoulss ghoulss 1.4MB Nov 24 2024 Experience.md <br/>
          drwxr-xr-x 12 ghoulss ghoulss 1.6MB Nov 25 2024 Projects.md 
          </>
        );
      }
      else
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Invalid Flag <br/>
             Check "help -all" to see the available flags
          </span>
        );
      }
    },
    uname: (input) => {
      if (!input)
      {
        return "PariahOS V3.4 standard";
      }
      else if (input === "-a")
      {
        return "Linux_PariahOS Desktop-C7F58157 24.06-Debian_Linux standard x86_64 GNU/Linux";
      }
      else if (input === "-r")
      {
        return "Debian_Linux_24.06-standard";
      }
      else
      {
        return(
          <span style= {{color: darkthemeextend.errorColor }}> 
             Error: Invalid Flag <br/>
             Check "help -all" to see the available flags
          </span>
        );
      }
    }, 
    sudo: (isroot) => {
      if (!isroot){
        setisroot(true);
        setcliPrompt("root@PariahOS> ");
        setwelcomeMessage(
        <>
        Alaya Vijnana System V1.4 <br/>
        ASW-G-08:-Barbatos Lupus Rex<br/> 
        <br/>
        Potato CLI here. Check out a better&nbsp;
        <a style={{color:"red", textDecoration: "none"}}   
        target="_blank"
        rel="noopener noreferrer" 
        href="https://gh0ulss.github.io/Cli-Portfolio/">one</a> <br/>
        Type 'help' to see available commands. Press 'Esc' to quit terminal. <br/>
        </>
        );
        return "Changed permissions to root. Enjoy."
      }
      else
      {
        return (
          <span style= {{color: darkthemeextend.errorColor }}> 
           You are already root. 
          </span>
        );
      }
    }
  };

  return (
      <ReactTerminal 
        welcomeMessage={welcomeMessage}
        prompt={cliprompt}
        commands={availablecmd}
        showControlBar={false}
        themes={{
          "dark": {
            themeBGColor: "#000000",
            themeToolbarColor: "#1f1f1f",
            themeColor: "#ffffff",
            themePromptColor: "#008000",
          }
        }}
        theme="dark"
        errorMessage={<span style = {{color: darkthemeextend.errorColor}}> Command not found </span>}
      /> 
  );
};

export default Shellterm;