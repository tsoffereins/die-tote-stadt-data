(function () {
    const { measure, notes, tuplet, beam, curve, render } = new VF.Sheet({
        id: 'traum-der-wiederkehr',
        measureWidths: [400, 220, 240],
        offsetY: 20
    });

    // Measure 1
    measure('2/2')
        .addNotes([
            tuplet(
                notes('E5/q'),
                beam(notes('Fb5/8', 'E5/8')),
                notes('Gb5/q/#1'),
                { num_notes: 3 }
            ),
            tuplet(
                notes('Gb5/q/#2'),
                beam(notes('A5/8', 'Bb5/8', 'Cb6/8', 'D6/8')),
                { num_notes: 3 }
            )
        ])
        .addClef('bass')
        .addTimeSignature('2/2');

    curve(1, 2);

    // Measure 2
    measure()
        .addNotes([
            notes('E6/h/#3'),
            notes('E6/q/#4'),
            tuplet(beam(notes('D6/8', 'E6/8', 'D6/8')))
        ]);

    curve(3, 4);

    // Measure 3
    measure()
        .addNotes([
            notes('Cb6/h/#5', 'Cb6/8/#6', 'B4/8/r', 'B4/q/r')
        ]);

    curve(5, 6);

    render();
})();
