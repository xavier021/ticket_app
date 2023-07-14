export default function GetPriorities(tickets) {
  var lowPrio = 0;
  var mediumPrio = 0;
  var highPrio = 0;
  var criticalPrio = 0;

  tickets.map((data) => {
    const { priority, status } = data;

    // if (status !== "Closed") console.log(status);

    if (
      status !== "Closed" &&
      status !== "Resolved" &&
      status !== "Cancelled"
    ) {
      console.log(status)
      switch (priority) {
        case "Low":
          lowPrio++;
          break;
        case "Medium":
          mediumPrio++;
          break;
        case "High":
          highPrio++;
          break;
        case "Critical":
          criticalPrio++;
          break;
        default:
          console.log("No valid status!");
      }
    }
  });

  const setPrio = [
    { name: "Low", Tickets: lowPrio },
    { name: "Medium", Tickets: mediumPrio },
    { name: "High", Tickets: highPrio },
    { name: "Critical", Tickets: criticalPrio },
  ];

  return setPrio;
}
