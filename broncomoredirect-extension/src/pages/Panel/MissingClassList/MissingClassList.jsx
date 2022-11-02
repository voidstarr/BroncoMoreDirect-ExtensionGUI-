import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

//const prefix = 'MissingClassList';

//const classes = {
//    root: `${prefix}-root`,
//    heading: `${prefix}-heading`
//};

//const AccStyle = styled('div')((theme) => ({
//    [`&.${classes.root}`]: {
//        width: "100%"
//    },
//    [`&.${classes.heading}`]: {
//        fontsize: theme.typography.pxToRem(15),
//        fontweight: theme.typography.fontweightregular
//    }
//}));

const MissingClassList = () => {
    const [missingClasses, setMissingClasses] = useState([]);

    useEffect(async () => {
        let classes = [
            {
                area: "C3",
                subject: "Underwater Basket Weaving",
                courseNumber: "3040",
                required: "false",
                genEd: "true",
                elective: "false",
                units: "3"
            },
            {
                area: "C3",
                subject: "Underwater Basket Weaving",
                courseNumber: "3040",
                required: "false",
                genEd: "true",
                elective: "false",
                units: "3"
            },
            {
                area: "C3",
                subject: "Underwater Basket Weaving",
                courseNumber: "3040",
                required: "false",
                genEd: "true",
                elective: "false",
                units: "3"
            }
        ];
        /*
      //INSTRUCTIONS:
      //1. Log into my.cpp.edu and load up the progress degree report
      //2. Expand all your sections.
      //3. Click f12 
      //4. INSPECT ANY ELEMENT (this code will not work if you don't)
      //5. Go to console and paste.
      //*/

      //  function requirement(subject, courseNumber, required, genEd, area, elective, units) //obj constructor       
      //  {
      //      this.subject = subject;
      //      this.courseNumber = courseNumber;
      //      this.required = required;
      //      this.genEd = genEd;
      //      this.area = area;
      //      this.elective = elective;
      //      this.units = units;
      //  }

      //  var requirementArr = [];                                                            //obj array

      //  var category = document.getElementsByClassName("ui-collapsible-heading-toggle");    //gathers all the collapsible boxes (this is where areas/courses are)
      //  var courseInfo = document.getElementsByClassName("PSLONGEDITBOX");                  //gathers course required/units (as of 7/22 I only use it for the units)
      //  //this will seem redundant, but I could not find another way. Both elements
      //  var genEdArr = [];                                                                  //share titles, but differ in that one has taken status and the other has units.
      //  var categoryArr = [];
      //  var courseInfoArr = [];                                                             //these arrays will contain only relevant info

      //  for (i = 0; i < category.length; i++)                                                //produces requirement/GE/Elective info
      //  {                                                                                   //checks "ui-collapsible-heading-toggle" element starts with 2 or 3
      //      var character = category[i].textContent.charAt(0);                              //capital letters followed by a space and then a number. 
      //      if (character == character.toUpperCase() && isNaN(character))                    //For example (MAT 1)400/(CS 1)300.
      //      {                                                                               //will also check for GE Areas/Electives.
      //          character = category[i].textContent.charAt(1);
      //          if (character == character.toUpperCase() && isNaN(character) && character != ':') {
      //              character = category[i].textContent.charAt(2);
      //              if (character == character.toUpperCase() && character != ' ') {
      //                  character = category[i].textContent.charAt(3);
      //                  if (character == ' ') {
      //                      character = category[i].textContent.charAt(4);
      //                      if (!isNaN(character)) {
      //                          categoryArr.push(category[i].textContent);
      //                      }
      //                  }
      //              }
      //              else if (character == ' ') {
      //                  character = category[i].textContent.charAt(3);
      //                  if (!isNaN(character)) {
      //                      categoryArr.push(category[i].textContent);
      //                  }
      //              }
      //          }
      //          else if (!isNaN(character)) {
      //              genEdArr.push(category[i].textContent);
      //          }
      //          else if (character == ':') {
      //              genEdArr.push(category[i].textContent);
      //          }
      //      }
      //      if (category[i].textContent.includes("ELECTIVES")) {
      //          categoryArr.push(category[i].textContent);
      //          break;
      //      }
      //  }


      //  /*
      //  for(i = 0; i < genEdArr.length; i++)                                                //testing purpose, will print all of the GEs  
      //  {
      //      console.log(genEdArr[i].textContent);
      //  }
      //  for(i = 0; i < categoryArr.length; i++)                                             //testing purpose, will print all of the requrired  
      //  {                                                                                   //classes it picks up. Double check with your dpr
      //      console.log(categoryArr[i].textContent);
      //  }
      //  */

      //  for (i = 0; i < courseInfo.length; i++)                                              //produces unit info for only required classes and electives
      //  {                                                                                   //GEs won't work with this method, with time I can make it work though
      //      var character = courseInfo[i].textContent.charAt(0);
      //      if (character == character.toUpperCase() && isNaN(character)) {
      //          character = courseInfo[i].textContent.charAt(1);
      //          if (character == character.toUpperCase()) {
      //              character = courseInfo[i].textContent.charAt(2);
      //              if (character == character.toUpperCase() && character != ' ') {
      //                  character = courseInfo[i].textContent.charAt(3);
      //                  if (character == ' ') {
      //                      character = courseInfo[i].textContent.charAt(4);
      //                      if (!isNaN(character)) {
      //                          courseInfoArr.push(courseInfo[i].textContent);
      //                      }
      //                  }
      //              }
      //              else if (character == ' ') {
      //                  character = courseInfo[i].textContent.charAt(3);
      //                  if (!isNaN(character)) {
      //                      courseInfoArr.push(courseInfo[i].textContent);
      //                  }
      //              }
      //          }
      //      }
      //      if (courseInfo[i].textContent.includes("Major Elective Requirement:")) {
      //          courseInfoArr.push(courseInfo[i].textContent);
      //          break;
      //      }
      //      if (courseInfo[i].textContent.includes("The Social Sciences - Principles, Methodologies, Value Systems, & Ethics Requirement:")) {
      //          if (courseInfo[i + 1].textContent.includes("1 taken")) {
      //              genEdArr.splice(genEdArr.indexOf("D3: SOCIAL SCIENCES: PRINCIPLES, METHODOLOGIES, VALUE SYSTEMS & ETHICS (R304/30)"));
      //          }
      //          else {
      //              continue;                                                               //D3 fix.
      //          }                                                                           //KNOWN ISSUE: Haven't been able to test since
      //      }                                                                               //D3 is already completed for me.
      //  }

      //  /*for(i = 0; i < courseInfoArr.length; i++)                                         //testing purposes, will print all of the requrired  
      //  {                                                                                   //classes it picks up. Double check with your dpr
      //      console.log(courseInfoArr[i].textContent);
      //  }
      //  */


      //  for (i = 0; i < genEdArr.length; i++)                                                //fills in GE info to final obj array
      //  {
      //      if (genEdArr[i].includes("Error") || genEdArr[i].includes("D3:")) {
      //          var newClass = new requirement();

      //          newClass.subject = "";
      //          newClass.courseNumber = "";
      //          newClass.required = false;
      //          newClass.genEd = true;
      //          newClass.area = genEdArr[i].trim().split(" (R")[0];                         //this line removes the (R-232/10)-like endings to the classes,
      //          newClass.elective = false;                                                  //will not work if there are classes where the code doesn't start with "R"
      //          newClass.units = 3;                                                         //as far as I know, all GEs are only 3 units, looked at curriculum
      //          //sheets of a couple of colleges to double check. Will scrape properly if necessary
      //          requirementArr.push(newClass);
      //      }
      //  }

      //  for (i = 0; i < categoryArr.length; i++)                                             //this range fills in required course info, with the last entry being electives
      //  {
      //      if (categoryArr[i].includes("Error")) {
      //          if (i == categoryArr.length - 1)                                               //electives category
      //          {
      //              var newClass = new requirement();

      //              newClass.subject = ""
      //              newClass.courseNumber = "";
      //              newClass.required = false;
      //              newClass.genEd = false;
      //              newClass.area = categoryArr[i].trim().split(" (R")[0];
      //              newClass.elective = true;
      //              newClass.units = parseInt(courseInfoArr[i].trim().split("(")[1].trim().split(" ")[0]);
      //          }
      //          else {

      //              var courseSubject = categoryArr[i].match(/[a-zA-Z]+/g);                 //these two lines split the cat element into two arrays, one with letters.
      //              var courseNum = categoryArr[i].match(/\d+/g);                           //and the other with numbers. This is to separate the course num and subject.

      //              for (j = 1; j < courseSubject.length; j++)                               //This will look for a lab or a supplemental class. BIO 1110L or MAT 1140A.
      //              {                                                                       //as far as I know there are no other "letter" classes.
      //                  if (courseSubject[j].indexOf("L") > -1 || courseSubject[j].indexOf("A") > -1) {

      //                      courseNum[0] = courseNum[0].concat(courseSubject[j]);
      //                  }
      //              }                                                                       //KNOWN ISSUE: this will only work if there are no joint classes like Anthony's DPR.  
      //              //in that case the "courseSubject" array will have {"PHY", "PHY", "L", "R"}
      //              var newClass = new requirement();

      //              newClass.subject = courseSubject[0];
      //              newClass.courseNumber = courseNum[0];
      //              newClass.required = true;
      //              newClass.genEd = false;
      //              newClass.area = "";
      //              newClass.elective = false;
      //              newClass.units = parseInt(courseInfoArr[i].trim().split("e/")[1].trim().split(" ")[0]);

      //          }
      //          requirementArr.push(newClass);
      //      }
      //  }
      //  console.log(requirementArr);
        setMissingClasses(/*requirementArr*/classes);
    }, []);

    return (
        //<AccStyle className={classes.root}>
        <div>
            {missingClasses.map(c =>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography /*className={classes.heading}*/>{c.area}: {c.subject} {c.courseNumber}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Required: {c.required}<br />
                            General Education: {c.genEd}<br />
                            Elective: {c.elective}<br />
                            Units: {c.units}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
        //</AccStyle>
    );
}

export default MissingClassList;