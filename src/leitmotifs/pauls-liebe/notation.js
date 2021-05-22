(function () {
    const { score, measure, notes, beam, curve, render } = new VF.Sheet({
        id: 'pauls-liebe',
        measureWidths: [320, 180, 180]
    });

    score.set({ time: '2/2' });

    // Measure 1
    measure()
        .addNotes([
                beam(notes('G4/8', 'Ab4/16', 'Bb4/16', { stem: 'up' })),
                notes('A4/q.', 'G4/8', 'B4/q[id="n1"]')
            ])
        .addClef('treble')
        .addTimeSignature('2/2');

    // Measure 2
    measure()
        .addNotes([
            notes('B4/q[id="n2"]', 'C5/h', 'D5/q')
        ]);

    curve('n1', 'n2');

    // Measure 3
    measure()
        .addNotes([
            notes('G5/h[id="n3"]', 'G5/q[id="n4"]', 'B4/q/r')
        ]);

    curve('n3', 'n4');

    // Render the score
    render();
})();
