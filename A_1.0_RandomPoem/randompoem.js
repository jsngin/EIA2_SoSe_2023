var radnomizedPoemScript;
(function (radnomizedPoemScript) {
    let subjects = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];
    let praedicates = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];
    let objects = ["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];
    for (let i = objects.length; i >= 1; i--) {
        let versComplete = getVerse(subjects, praedicates, objects);
        console.log(versComplete);
    }
    function getVerse(_sub, _prä, _obj) {
        let _random1 = Math.floor(Math.random() * _sub.length);
        let _random2 = Math.floor(Math.random() * _prä.length);
        let _random3 = Math.floor(Math.random() * _obj.length);
        let versAufnahme = _sub[_random1] + " " + _prä[_random2] + " " + _obj[_random3];
        _sub.splice(_random1, 1);
        _prä.splice(_random2, 1);
        _obj.splice(_random3, 1);
        return versAufnahme;
    }
})(radnomizedPoemScript || (radnomizedPoemScript = {}));
//# sourceMappingURL=randompoem.js.map