(function () {
    const { score, measure, notes, render } = new VF.Sheet({
        id: 'alten-lieb-und-treu',
        measureWidths: [240, 200, 200]
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('Eb5/h.', 'Bb4/q')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('Ab4/q', 'G4/q', 'F4/q', 'Eb4/q')
        ]);

    // Measure 3
    measure()
        .addNotes([
            notes('F4/h.', 'B4/q/r')
        ]);

    render();
})();
