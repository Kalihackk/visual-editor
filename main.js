let addBtn = document.querySelector("#add"),
  previewBtn = document.querySelector("#preview"),
  saveBtn = document.querySelector("#save"),
  items = document.querySelectorAll(".item"),
  itemsList = document.querySelector(".items-menu"),
  currentItems = [],
  workflow = document.querySelector(".workflow"),
  isPreviewing = false;
let objlist = [];

addBtn.addEventListener("click", function () {
  itemsList.style = "display: block";
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      switch (i) {
        case 0:
          let input = document.createElement("input"),
            textBlock = document.createElement("h1");
          textBlock.textContent = "Write smth in this input";
          currentItems.push(textBlock);
          workflow.append(textBlock, input);
          input.addEventListener("change", () => {
            textBlock.textContent = input.value;
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              input.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              input.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj = {
            type: items[i],
            content: textBlock.textContent,
          };
          objlist.push(obj);
          break;
        case 1:
          let input1 = document.createElement("input"),
            textBlock1 = document.createElement("h2");
          textBlock1.textContent = "Write smth in this input";
          currentItems.push(textBlock1);
          workflow.append(textBlock1, input1);
          input1.addEventListener("change", () => {
            textBlock1.textContent = input1.value;
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              input1.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              input1.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj1 = {
            type: items[i],
            content: textBlock1.textContent,
          };
          objlist.push(obj1);
          break;
        case 2:
          let textArea = document.createElement("textarea"),
            textBlock2 = document.createElement("div");
          textBlock2.textContent = "Write smth in this textArea";
          currentItems.push(textBlock2);
          workflow.append(textBlock2, textArea);
          textArea.addEventListener("change", () => {
            textBlock2.textContent = textArea.value;
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              textArea.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              textArea.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj2 = {
            type: items[i],
            content: textBlock2.textContent,
          };
          objlist.push(obj2);
          break;
        case 3:
          let image = document.createElement("img"),
            input2 = document.createElement("input"),
            textBlock3 = document.createElement("div"),
            imageWork = false;
          image.style = "display: block";
          textBlock3.textContent = "Write url of ur img in this input";
          currentItems.push(image, textBlock3);
          workflow.append(image, textBlock3, input2);
          input2.addEventListener("change", () => {
            if (!imageWork) {
              image.src = input2.value;
              imageWork = true;
            }
            if (imageWork) {
              textBlock3.textContent = "Write text about ur img in this input";
              input2.addEventListener("change", () => {
                textBlock3.textContent = input2.value;
              });
            }
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              input2.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              input2.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj3 = {
            type: items[i],
            content: textBlock3.textContent,
          };
          objlist.push(obj3);
          break;
        case 4:
          let list = document.createElement("ul"),
            button = document.createElement("button"),
            buttonStop = document.createElement("button"),
            input3 = document.createElement("input");
          currentItems.push(input3);
          input3.placeholder = "Write textContent of li";
          button.textContent = "Add list item";
          buttonStop.textContent = "STOP";
          currentItems.push(list);
          workflow.append(list, button, buttonStop);
          button.addEventListener("click", function () {
            let li = document.createElement("li");
            list.append(li);
            workflow.append(input3);
            input3.addEventListener("change", function () {
              li.textContent = input3.value;
            });
            buttonStop.addEventListener("click", () => {
              button.style = "display: none";
              buttonStop.style = "display: none";
            });
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              button.style = "display: none";
              buttonStop.style = "display: none";
              input3.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              button.style = "display: block";
              buttonStop.style = "display: block";
              input3.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj4 = {
            type: items[i],
            content: list,
          };
          objlist.push(obj4);
          break;
        case 5:
          let input4 = document.createElement("textarea"),
            textBlock4 = document.createElement("div");
          textBlock4.textContent = "Write quote and author in this input";
          currentItems.push(textBlock4);
          workflow.append(textBlock4, input4);
          input4.addEventListener("change", () => {
            textBlock4.textContent = input4.value;
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              input4.style = "display: none";
              isPreviewing = true;
            } else {
              itemsList.style = "display: block";
              input4.style = "display: block";
              isPreviewing = false;
            }
          });
          let obj5 = {
            type: items[i],
            content: textBlock4.textContent,
          };
          objlist.push(obj5);
          break;
        case 6:
          let list1 = document.createElement("ul"),
            button1 = document.createElement("button"),
            buttonStop1 = document.createElement("button"),
            input5 = document.createElement("input");
          currentItems.push(input5);
          input5.placeholder = "Write textContent of li";
          button1.textContent = "Add list item";
          buttonStop1.textContent = "STOP";
          currentItems.push(list1);
          workflow.append(list1, button1, buttonStop1);
          button1.addEventListener("click", function () {
            let li = document.createElement("li");
            list.append(li);
            workflow.append(input5);
            input5.addEventListener("change", function () {
              li.textContent = input5.value;
            });
            buttonStop.addEventListener("click", () => {
              button1.style = "display: none";
              buttonStop1.style = "display: none";
            });
          });
          previewBtn.addEventListener("click", () => {
            if (!isPreviewing) {
              itemsList.style = "display: none";
              button1.style = "display: none";
              buttonStop1.style = "display: none";
              input5.style = "display: none";
              isPreviewing = true;
            } else if (isPreviewing) {
              isPreviewing = false;
              itemsList.style = "display: block";
              button1.style = "display: block";
              buttonStop1.style = "display: block";
              input5.style = "display: block";
            }
          });
          let obj6 = {
            type: items[i],
            content: list1,
          };
          objlist.push(obj6);
          break;
      }
    });
  }
});

saveBtn.addEventListener("click", function () {
  localStorage.setItem("objectList", objlist);
});
