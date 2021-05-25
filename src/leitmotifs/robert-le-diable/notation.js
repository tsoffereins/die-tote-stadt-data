(function () {
    const { measure, notes, beam, articulate, render } = new VF.Sheet({
        id: 'robert-le-diable',
        measureWidths: [220, 160, 260, 220],
        offsetY: 5
    });

    // Measure 1
    measure('4/4')
        .addNotes([
             notes('C#6/w')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('G#5/h', 'E5/h')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('C#5/q.', 'C5/8/#1'),
            beam(notes('E5/8/#2', 'G#5/8/#3', 'C#6/8/#4', 'D#6/8/#5'))
        ]);

    articulate([1, 2, 3, 4, 5], 'a.');

    // Measure 4
    measure()
        .addNotes([
            beam(notes('E6/8/#6', 'C#6/8/#7')),
            notes('B4/q/r', 'B4/h/r')
        ]);

    articulate([6, 7], 'a.');

    render();
})();
