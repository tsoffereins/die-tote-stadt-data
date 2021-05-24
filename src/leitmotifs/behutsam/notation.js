(function () {
    const { measure, notes, render } = new VF.Sheet({
        id: 'behutsam',
        measureWidths: [240, 180]
    });

    // Measure 1
    measure('3/4')
        .addNotes([
            notes('B4/q/r', 'B4/8/r.', 'F#4/16', 'A4/q')
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            notes('E4/q', 'B4/q/r', 'B4/q/r')
        ]);

    render();
})();
