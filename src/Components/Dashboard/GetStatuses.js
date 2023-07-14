export function GetStatusOpen(tickets) {
  var newStatus = 0;
  var assignedStatus = 0;
  var inprogStatus = 0;
  var pendingStatus = 0;

  tickets.map((data) => {
    const { status } = data;

    switch (status) {
      case "New":
        newStatus++;
        break;
      case "Assigned":
        assignedStatus++;
        break;
      case "In Progress":
        inprogStatus++;
        break;
      case "Pending":
        pendingStatus++;
        break;
      default:
        console.log("No valid status!");
    }
  });

  const setStatus = [
    { name: "New", Tickets: newStatus },
    { name: "Assigned", Tickets: assignedStatus },
    { name: "In Progress", Tickets: inprogStatus },
    { name: "Pending", Tickets: pendingStatus },
  ];

  return setStatus;
}


export function GetStatusClose(tickets){
  var resolvedStatus = 0;
  var closedStatus = 0;
  var cancelledStatus = 0;

  tickets.map((data) => {
    const { status } = data;

    switch (status) {
      case "Resolved":
        resolvedStatus++;
        break;
      case "Closed":
        closedStatus++;
        break;
      case "Cancelled":
        cancelledStatus++;
        break;
      default:
        console.log("No valid status!");
    }
  });

  const setStatus = [
    { name: "Resolved", Tickets: resolvedStatus },
    { name: "Closed", Tickets: closedStatus },
    { name: "Cancelled", Tickets: cancelledStatus },
  ];

  return setStatus;
}