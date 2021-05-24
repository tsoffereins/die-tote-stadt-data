(function () {
    const { measure, notes, render } = new VF.Sheet({
        id: 'bells-2',
        measureWidths: [420]
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/8/r', 'G5/8', 'B4/8/r', 'C5/8', 'B4/8/r', 'D5/8', 'B4/8/r', 'F4/8')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    render();
})();
