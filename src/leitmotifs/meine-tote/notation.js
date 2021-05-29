(function () {
    const { measure, notes, curve, find, render } = new VF.Sheet({
        id: 'meine-tote',
        measureWidths: [400]
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('Eb5/16', 'D5/8./#1', 'D5/8/#2', 'C#5/q', 'C5/q/#3', 'B4/8/#4')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    curve(1, 2);

    find(3).addAccidental(0, new VF.Accidental('n'));
    find(4).addAccidental(0, new VF.Accidental('n'));

    render();
})();
