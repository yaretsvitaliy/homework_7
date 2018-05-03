function addInfo() {
    var name_person = document.getElementById('name');
    name_person.innerHTML = (SecondName.value) + " " + (FirstName.value) + " " + (ThreeName.value);
    var AgeYears = document.getElementById('years');
    AgeYears.innerHTML = typeAge.value;
    var AgeDays = document.getElementById('days');
    AgeDays.innerHTML = typeAge.value * 365;
    var gender_person = document.querySelector('input[name="gender"]:checked');
    gender_input.innerHTML = gender_person.value;

    var pensionAgeMan = 61;
    var pensionAgeWoman = 56;
    var addGender = gender_person.value;
    ((addGender == "woman") && (typeAge.value < pensionAgeWoman)) ?
        pension_age.innerHTML = "нет":
    ((addGender == "woman") && (typeAge.value >= pensionAgeWoman)) ?
        pension_age.innerHTML = "да":
    ((addGender == "man") && (typeAge.value < pensionAgeMan)) ?
        pension_age.innerHTML = "нет":
        pension_age.innerHTML = "да";
}
button.addEventListener('click', addInfo);