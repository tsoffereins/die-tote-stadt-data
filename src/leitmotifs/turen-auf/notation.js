(function () {
    const { measure, notes, beam, curve, articulate, render } = new VF.Sheet({
        id: 'turen-auf',
        measureWidths: [180, 200, 260, 160]
    });

    // Measure 1
    measure('3/4')
        .addNotes([
            notes('A5/q', 'F#5/h')
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            beam(notes('E5/8.', 'F#5/16')),
            notes('D5/h/#1')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('D5/8/#2', 'A4/8/#3'),
            beam(notes('D5/16', 'E5/16', 'F#5/16', 'D5/16')),
            notes('A5/8/#4', 'B4/8/#5')
        ]);

    curve(1, 2);
    articulate([3, 4], 'a>');
    articulate(5, 'a^');

    // Measure 4
    measure()
        .addNotes([
            notes('E5/h./#6')
        ]);

    articulate(6, 'a^');

    render();
})();
