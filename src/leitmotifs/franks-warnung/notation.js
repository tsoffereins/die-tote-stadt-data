(function () {
    const { score, measure, notes, beam, curve, render } = new VF.Sheet({
        id: 'franks-warnung',
        measureWidths: [260, 300, 300, 260]
    });

    score.set({ time: '6/8' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/8/r'),
            beam(notes('Ab3/8.', 'Gb4/16')),
            notes('G4/q', 'F4/8[id="n1"]')
        ])
        .addClef('treble')
        .addTimeSignature('6/8');

    // Measure 2
    measure()
        .addNotes([
            beam(notes('F4/8[id="n2"]', 'Eb4/8.', 'Db4/16')),
            notes('Db4/q', 'C4/8[id="n3"]')
        ]);

    curve('n1', 'n2');

    // Measure 3
    measure()
        .addNotes([
            beam(notes('C4/8[id="n4"]', 'Bb3/8.', 'Ab3/16')),
            notes('Eb4/q', 'Db4/8')
        ]);

    curve('n3', 'n4');

    // Measure 4
    measure()
        .addNotes([
            beam(notes('C4/8', 'Db4/8', 'Bb3/8', { stem: 'up' })),
            notes('F4/q', 'Eb4/8')
        ]);

    render();
})();
