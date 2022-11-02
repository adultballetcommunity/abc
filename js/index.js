const scheduleCont = document.getElementsByClassName("schedule")[0];
const selectMenu = document.getElementById("scheduleSelect");

selectMenu.value = localStorage.getItem("selectMenuValue") || "teacher";

const renderSchedule = () => {
  switch (selectMenu.value) {
    case "teacher":
      createScheduleTeacher();
      break;
    case "day":
      createScheduleDay();
      break;
  }
  localStorage.setItem("selectMenuValue", selectMenu.value);
};

selectMenu.addEventListener("input", renderSchedule);

const c = (tag, attrs = {}, children = []) => {
  const elem = document.createElement(tag);
  for (const [attr, value] of Object.entries(attrs)) {
    if (["textContent", "innerHTML", "outerHTML"].includes(attr)) {
      elem[attr] = value;
    } else {
      elem.setAttribute(attr, value);
    }
  };
  children.forEach(child => {
    elem.appendChild(child);
  });
  return elem;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",  
];

// Equates arrays of strings
const arrayOfStrEq = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error("Non-array passed to array equator", arr1, arr2);
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i=0; i<arr1.length; i++) {
    if (typeof arr1[i] !== "string") {
      console.error("Non-string-array", arr1);
      return false;
    }
    if (typeof arr2[i] !== "string") {
      console.error("Non-string-array", arr2);
      return false;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Converts 24hr time to am/pm time (hhmm to (h)h:mm [am|pm])
const timeConvert = (time) => {
  if (!Number.isInteger(+time) || time < 0 || time > 2359) {
    console.error("A non-24hr time was attemped conversion:", time);
    return;
  }
  time = (typeof time === "string") ? time : time.toString();

  // Edge Case for "00:00am"
  if (time === "0000") {
    return "00:00am";
  }

  const hrs_24 = time.slice(0,2);
  const [hr, min, m] = [
    (hrs_24 === "12") ? 12 : hrs_24 % 12,
    time.slice(2),
    (hrs_24 < 12) ? "am" : "pm"
  ];
  const newTime = `${hr}:${min}${m}`;
  return newTime;
};

const writeTimeRange = (timeRange) => {
  return `${timeConvert(timeRange.start)} - ${timeConvert(timeRange.end)}`;
};

const createScheduleDay = () => {
  const table = c("table", {class: "schedule"});

  // Create Schedule by Days
  const scheduleDay = {};
  days.forEach(day => {
    scheduleDay[day] = [];
  });
  for (const [teacher, classes] of Object.entries(schedule)) {
    classes.forEach(classe => {
      classe.teacher = teacher;
      scheduleDay[days[classe.day]].push(classe);
    });
  }

  const daysOrder = days.slice(1);
  daysOrder.push("Sunday");
  daysOrder.forEach(day => {
    const titleRow = c("tr", {class: "newSet"}, [
      c("th", {class: "teacher", colspan: 4, textContent: day + "s"})
    ]);
    table.appendChild(titleRow);

    scheduleDay[day].forEach((classe, i) => {
      if (scheduleDay[day][i-1]?.teacher !== classe.teacher || !arrayOfStrEq(scheduleDay[day][i-1]?.dates, classe.dates)) {
        let datesStr = classe.teacher + "&emsp;<span class='noBold'>(";
        datesStr += (classe.dates.length === 1) ? `from ${classe.dates[0].split(/\./g).join("/")}` : `${classe.dates[0].split(/\./g).join("/")} to ${classe.dates[classe.dates.length-1].split(/\./g).join("/")}`;
        datesStr += ")</span>";

        const subTitleRow = c("tr", {}, [
	  c("th", {class: "day", colspan: 4, innerHTML: datesStr})
        ]);
        table.appendChild(subTitleRow);
      }
      const infoRow = c("tr", {class: i===scheduleDay[day].length-1 ? "newSet" : ""}, [
	c("td", {class: "time", textContent: writeTimeRange(classe.time)}),
	c("td", {class: "studio", innerHTML: `<a href="${studios[classe.studio].mapLink}" target="_blank">${classe.studio}</a>`, title: studios[classe.studio].address}),
	c("td", {class: "level", textContent: classe.classType}),
	c("td", {class: "cost", textContent: "$" + classe.cost}),
      ]);
      table.appendChild(infoRow);
    });
  });

  if (scheduleCont.getElementsByTagName("table")[0]) {
    scheduleCont.getElementsByTagName("table")[0].replaceWith(table);
  } else {
    scheduleCont.appendChild(table);
  }
};

const createScheduleTeacher = () => {
  const table = c("table", {class: "schedule"});

  for (const [teacher, classes] of Object.entries(schedule)) {
    const titleRow = c("tr", {class: "newSet"}, [
      c("th", {class: "teacher", colspan: 4, textContent: teacher})
    ]);
    table.appendChild(titleRow);

    classes.forEach((classe, i) => {
      if (classes[i-1]?.day !== classe.day || !arrayOfStrEq(classes[i-1]?.dates, classe.dates)) {
        let datesStr = days[classe.day] + "s" + "&emsp;<span class='noBold'>(";
        datesStr += (classe.dates.length === 1) ? `from ${classe.dates[0].split(/\./g).join("/")}` : `${classe.dates[0].split(/\./g).join("/")} to ${classe.dates[classe.dates.length-1].split(/\./g).join("/")}`;
        datesStr += ")</span>";

        const subTitleRow = c("tr", {}, [
	  c("th", {class: "day", colspan: 4, innerHTML: datesStr})
        ]);
        table.appendChild(subTitleRow);
      }
      const infoRow = c("tr", {class: i===classes.length-1 ? "newSet" : ""}, [
	c("td", {class: "time", textContent: writeTimeRange(classe.time)}),
	c("td", {class: "studio", innerHTML: `<a href="${studios[classe.studio].mapLink}" target="_blank">${classe.studio}</a>`, title: studios[classe.studio].address}),
	c("td", {class: "level", textContent: classe.classType}),
	c("td", {class: "cost", textContent: "$" + classe.cost}),
      ]);
      table.appendChild(infoRow);
    });
  }

  if (scheduleCont.getElementsByTagName("table")[0]) {
    scheduleCont.getElementsByTagName("table")[0].replaceWith(table);
  } else {
    scheduleCont.appendChild(table);
  }  
};

renderSchedule();