
document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 여기에서 데이터를 수집하거나 처리할 수 있습니다.
    alert("설문이 제출되었습니다. 감사합니다!");
    window.location.href = "../mainpage.html";
});
