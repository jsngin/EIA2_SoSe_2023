namespace radnomizedPoemScript {

    let subject: string[] = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];
    let praedicates: string[] = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];
    let objects: string[] = ["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];

    for (let i = objects.length; i >= 1; i--) {
        let versComplete: string = getVerse(subject, praedicates, objects);
        console.log(versComplete);
    }


    function getVerse(_sub: string[], _prä: string[], _obj: string[]) {

        let _random1: number = Math.floor(Math.random() * _sub.length);
        let _random2: number = Math.floor(Math.random() * _prä.length);
        let _random3: number = Math.floor(Math.random() * _obj.length);

        let versAufnahme: string = _sub[_random1] + " " + _prä[_random2] + " " + _obj[_random3];
        
        _sub.splice(_random1, 1);       
        _prä.splice(_random2, 1);
        _obj.splice(_random3, 1);

        return versAufnahme;

    }
}