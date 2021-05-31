(function () {
    const { measure, notes, beam, articulate, curve, render } = new VF.Sheet({
        id: 'sturmisch',
        measureWidths: [400, 400],
        height: 160,
        offsetY: 25
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/8/r'),
            beam(notes('G6/8/#1', 'G6/16/#2', 'F#6/16', 'B6/16', 'B5/16')),
            notes('B4/8/r'),
            beam(notes('G6/8/#3', 'G6/16/#4', 'F#6/16', 'B6/16', 'B5/16'))
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    curve(1, 2);
    curve(3, 4);

    // Measure 2
    measure()
        .addNotes([
            notes('B4/8/r'),
            beam(notes('G6/8/#5', 'G6/16/#6', 'F#6/16', 'B6/16', 'B5/16')),
            beam(notes('F6/16/#7', 'B5/16', 'B5/16/#8', 'F#5/16')),
            beam(notes('F5/16/#9', 'B4/16', 'B4/16/#10', 'F#4/16', { stem: 'down' }))
        ]);

    curve(5, 6);
    articulate([1, 3, 5, 7, 8, 9, 10], 'a>');

    render();
})();
