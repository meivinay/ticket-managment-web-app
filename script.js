let body = document.querySelector("body");
let addBtn = document.querySelector(".add-button");
let footer = document.querySelector(".footer");

let colors = ["red","pink","yellow","turquoise"];
addBtn.addEventListener("click", (e) => {
    let preModal = document.querySelector(".modal");
    // if modal is already in view than return
    if (preModal != null) {
        return;
    }
    // else create modal and show
    let modal = document.createElement("div");
    
    modal.classList.add("modal"); // creating modal dfault color is turquoise
    modal.innerHTML = ` <div class="text-area-section">
    <div class="text-area" contenteditable="true"></div>
    </div>
    <div class="modal-priority-section">
    <div class="modal-priority-container">
    <div class="modal-priority red"></div>
    <div class="modal-priority pink"></div>                         
    <div class="modal-priority yellow"></div>
    <div class="modal-priority turquoise selected"></div> 
    </div>
    </div>`
    let ticketPriorityColor = "turquoise"; // default priority color
    let allModalPriority = modal.querySelectorAll(".modal-priority");
    // attach listner to every priority color in modal window
    for (let i = 0; i < allModalPriority.length; i++) {
        allModalPriority[i].addEventListener("click", (e) => {
            for (let j = 0; j < allModalPriority.length; j++) {
                allModalPriority[j].classList.remove("selected"); //selecting deselecting 
            }
            e.currentTarget.classList.add("selected");
            ticketPriorityColor = e.currentTarget.classList[1];  // at index 1 color is placed
        })
    }
    
    let footer = document.querySelector(".footer");
    footer.append(modal); // add modal in footer
    
    // taking text input from modal
    let textArea = modal.querySelector(".text-area");
    textArea.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            let txt = e.currentTarget.innerText;
            let ticket = document.createElement("div");
            ticket.classList.add("ticket-Container") //Create ticket when press Enter
            ticket.innerHTML = ` <div class="ticket-color"></div>   
            <div class="ticket-id">#shd</div>
            <div class="ticket-text">${txt} </div>`
            let ticketColor = ticket.querySelector(".ticket-color"); // selecting newly added ticket's  color div
            ticketColor.style.backgroundColor = ticketPriorityColor; //adding selected tickedpriority color to newly added ticket's color div background
            // append newly created ticket
            footer.append(ticket); 
            modal.remove();
            
            //changing ticket color after its ticket is created when clicked on it
            ticketColor.addEventListener("click",e=>{
                let currColor = e.currentTarget.style.backgroundColor;
                let index=-1;
                for(let i = 0; i<colors.length;i++){
                    if(colors[i] == currColor){
                        index = i;
                    }
                }
                index++;
                index = index % 4;
                let newColor = colors[index];
               console.log(newColor);
                e.currentTarget.style.backgroundColor = newColor;
               
            })
        }
    })
})




