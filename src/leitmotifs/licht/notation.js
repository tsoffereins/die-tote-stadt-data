(function () {
    const { measure, notes, beam, articulate, render } = new VF.Sheet({
        id: 'licht',
        measureWidths: [280, 360, 360, 360]
    });

    // Measure 1
    measure('3/8')
        .addNotes([
            beam(notes('G#3/16', 'A3/16')),
            beam(notes('B3/16', 'A3/16', 'C#4/16', 'A3/16'))
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure('3/4')
        .addNotes([
            beam(notes('F4/16/#1', 'C#4/16', 'B#3/16', 'C4/16')),
            beam(notes('D#4/16', 'C4/16', 'F4/16', 'C4/16')),
            beam(notes('A4/16/#2', 'F4/16', 'E4/16', 'F4/16'))
        ]);

    // Measure 3
    measure()
        .addNotes([
            beam(notes('G4/16', 'F4/16', 'A4/16', 'F4/16')),
            beam(notes('C#5/16/#3', 'F4/16', 'A4/16', 'F4/16', { stem: 'down' })),
            beam(notes('C5/16', 'A4/16', 'F5/16', 'C5/16', { stem: 'down' }))
        ]);

    // Measure 4
    measure()
        .addNotes([
            beam(notes('A5/16/#4', 'A4/16', 'C#5/16', 'A4/16', { stem: 'down' })),
            beam(notes('F5/16', 'C5/16', 'A5/16', 'F5/16')),
            beam(notes('C#6/16', 'A5/16', 'F6/16', 'C6/16'))
        ]);

    articulate([1, 2], 'a>', VF.Modifier.Position.BELOW);
    articulate([3, 4], 'a>');

    render();
})();
