function validate() {
    if (document.helloform.name.value == "") {
      alert("Vui lòng nhập tên đăng nhập");
    }
  
    if (document.helloform.email.value == "") {
      alert("Vui lòng nhập mail của bạn");
    }
  
    if (document.helloform.phone.value == "") {
      alert("Vui lòng nhập số điện thoại");
    }
  
    var checksđt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (checksđt.test(document.helloform.phone.value) == false) {
      alert("Sai định dạng số điện thoại");
    }
  
    var emailID = document.helloform.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    console.log(atpos);
    console.log(dotpos);
    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Sai định dạng email");
    }
  }
  