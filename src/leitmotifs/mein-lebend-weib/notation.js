(function () {
    const { measure, notes, beam, tuplet, curve, articulate, render } = new VF.Sheet({
        id: 'mein-lebend-weib',
        measureWidths: [400, 140]
    });

    // Measure 1
    measure('2/2')
        .addNotes([
            tuplet(
                notes('D5/q/#1', 'B4/8/r'),
                beam(notes('C5/16', 'D5/16')),
                notes('C5/q/#2'),
                { num_notes: 3 }
            ),
            tuplet(
                notes('C5/q/#3'),
                beam(notes('Bb4/8', 'C5/8', 'D5/8', 'Eb5/8')),
                { num_notes: 3 }
            )
        ])
        .addClef('treble')
        .addTimeSignature('2/2');

    articulate(1, 'a.');
    curve(2, 3);

    // Measure 2
    measure('1/2')
        .addNotes([
            notes('F5/h')
        ]);

    render();
})();
