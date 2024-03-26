document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
    var studentImg = document.getElementById("studentImage").files[0];
    var entrepreneurImg = document.getElementById("entrepreneurImage").files[0];
    var readerStudent = new FileReader();
    readerStudent.onload = function () {
      document.getElementById("studentImg").src = readerStudent.result;
    };
    readerStudent.readAsDataURL(studentImg);
    var readerEntrepreneur = new FileReader();
    readerEntrepreneur.onload = function () {
      document.getElementById("entrepreneurImg").src =
        readerEntrepreneur.result;
    };
    readerEntrepreneur.readAsDataURL(entrepreneurImg);
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
// รับฟอร์มของผู้ประกอบการ
const entrepreneurForm = document.getElementById("entrepreneurForm");

// เพิ่มการฟังก์ชันสำหรับตรวจสอบการแมทช์เมื่อกดปุ่ม
function checkMatch() {
  const studentName = document.getElementById("studentName").value;
  const studentSkill = document.getElementById("studentSkill").value;
  const entrepreneurName = document.getElementById("entrepreneurName").value;
  const entrepreneurSkill = document.getElementById("entrepreneurSkill").value;
  const studentImage = document.getElementById("studentImage").files[0];
  const entrepreneurImage =
    document.getElementById("entrepreneurImage").files[0];

  if (studentSkill === entrepreneurSkill) {
    readAndShowImages(
      studentName,
      entrepreneurName,
      studentImage,
      entrepreneurImage
    );
  } else {
    alert(
      `No match found. ${studentName} does not have a matching skill with ${entrepreneurName}.`
    );
  }
}

function readAndShowImages(
  studentName,
  entrepreneurName,
  studentImage,
  entrepreneurImage
) {
  const readerStudent = new FileReader();
  readerStudent.onload = function () {
    const studentImageSrc = readerStudent.result;

    const readerEntrepreneur = new FileReader();
    readerEntrepreneur.onload = function () {
      const entrepreneurImageSrc = readerEntrepreneur.result;

      showAlertWithImage(
        studentName,
        entrepreneurName,
        studentImageSrc,
        entrepreneurImageSrc
      );
    };
    readerEntrepreneur.readAsDataURL(entrepreneurImage);
  };
  readerStudent.readAsDataURL(studentImage);
}

// กำหนดการเรียกใช้ฟังก์ชัน checkMatch() เมื่อกดปุ่มในฟอร์มผู้ประกอบการ
const entrepreneurButton = document.querySelector(
  ".add-entrepreneur-form button"
);
entrepreneurButton.addEventListener("click", function () {
  checkMatch("entrepreneur");
});
// Function to preview image before upload for student form
document
  .getElementById("studentImage")
  .addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("studentImagePreview");
      output.innerHTML = '<img src="' + reader.result + '" width="200" />';
    };
    reader.readAsDataURL(event.target.files[0]);
  });

// Function to preview image before upload for entrepreneur form
document
  .getElementById("entrepreneurImage")
  .addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("entrepreneurImagePreview");
      output.innerHTML = '<img src="' + reader.result + '" width="200" />';
    };
    reader.readAsDataURL(event.target.files[0]);
  });

function showAlertWithImage(
  studentName,
  entrepreneurName,
  studentImage,
  entrepreneurImage
) {
  const alertContent = document.createElement("div");
  alertContent.innerHTML = `
    <p>${studentName} has a matching skill with ${entrepreneurName}.</p>
    <div>
      <img src="${studentImage}" width="100" alt="${studentName}" style="margin-right: 10px;">
      <img src="${entrepreneurImage}" width="100" alt="${entrepreneurName}">
    </div>
  `;
  alertContent.style.textAlign = "center"; // จัดให้อยู่ตรงกลาง
  alert(alertContent);
}
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
    var studentImg = document.getElementById("studentImage").files[0];
    var entrepreneurImg = document.getElementById("entrepreneurImage").files[0];
    var readerStudent = new FileReader();
    readerStudent.onload = function () {
      document.getElementById("studentImg").src = readerStudent.result;
    };
    readerStudent.readAsDataURL(studentImg);
    var readerEntrepreneur = new FileReader();
    readerEntrepreneur.onload = function () {
      document.getElementById("entrepreneurImg").src =
        readerEntrepreneur.result;
    };
    readerEntrepreneur.readAsDataURL(entrepreneurImg);
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
