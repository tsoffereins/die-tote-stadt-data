(function () {
    const { measure, notes, render } = new VF.Sheet({
        id: 'alten-lieb-und-treu',
        measureWidths: [240, 200, 200]
    });

    // Measure 1
    measure('4/4')
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
    measure('3/4')
        .addNotes([
            notes('F4/h.')
        ]);

    render();
})();
