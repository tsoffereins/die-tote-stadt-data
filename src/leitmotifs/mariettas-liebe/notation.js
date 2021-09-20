(function () {
    const { measure, notes, tuplet, curve, beam, render, articulate } = new VF.Sheet({
        id: 'mariettas-liebe',
        measureWidths: [400, 160],
        offsetY: 40
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/16/r.'),
            beam(
                notes(
                    'Eb6/32',
                    'G6/8/#1'
                )
            ),
            beam(
                notes(
                    'G6/8/#2',
                    'E6/8/#3'
                )
            ),
            beam(
                notes(
                    'E6/16/#4',
                    'G6/16/#5',
                    'E6/16/#6',
                    'G6/16/#7'
                )
            ),
            tuplet(
                notes('B4/16/r'),
                beam(
                    notes(
                        'E6/16/#8',
                        'G6/16/#9',
                        'E6/16/#10'
                    )
                ),
                notes('B4/32/r'),
                beam(
                    notes(
                        'E6/32',
                        'G6/32',
                        'E6/32'
                    )
                ),
                { num_notes: 3 }
            )
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure('3/4')
        .addNotes([
            notes('Bb5/q', 'G5/h')
        ])
        .addTimeSignature('3/4');

    curve(1, 2);
    curve(3, 4);

    articulate([5, 6, 7, 8, 9, 10], 'a.');

    render();
})();
