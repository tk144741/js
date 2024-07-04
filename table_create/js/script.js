

function getScrollPercent () {
    // スクロール量
    const scrolled = window.scrollY;
    // ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;
    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;  
    const percentage = scrolled / (pageHeight - viewHeight) * 100;  
    document.querySelector("#bar").style.width = `${percentage}%`;
}
  
function deleteTalbeRow () {
  const tbl = document.getElementById("client_info_tbl");
  const last = -1;
  const row = tbl.deleteRow(last);
}

function createTalbeCell(cells_array, length) {
  const tr = document.createElement("tr"); 
  for(let i = 0; i < length; i++){
    const td = document.createElement("td");
    const inp = document.createTextNode(cells_array[i]);
    td.appendChild(inp);
    tr.appendChild(td);
  }
  tbl.appendChild(tr);   
}

function rowAdd() {
  rowDelete();
  const radio_value = document.querySelector("input[name='client']:checked").value;

  if(radio_value === "google") {
    const google_info = ["https://google.com", "siem_guser", "abcdefg"];
    createTalbeCell(google_info, google_info.length);
  } 
  else if (radio_value === "microsoft") {
    const ms_info = ["https://bing.com", "siem_muser", "abcdefg"];
    createTalbeCell(ms_info, ms_info.length);
  }
  else {
    const nvidia_info = ["https://nvidia.com", "siem_nuser", "abcdefg"];
    createTalbeCell(nvidia_info, nvidia_info.length);
  }
}

function rowDelete() {
  let rw = tbl.rows.length;
  tbl.deleteRow(rw-1);  
}

const tbl = document.getElementById("tbl");
window.addEventListener("scroll", getScrollPercent);
