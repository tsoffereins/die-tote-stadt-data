(function () {
    const { score, measure, notes, tuplet, curve, render } = new VF.Sheet({
        id: 'die-tote-stadt',
        measureWidths: [420]
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes(
                notes(
                    'B4/8/r',
                    'F4/8'
                ),
                tuplet(
                    notes(
                        'C5/q',
                        'A4/8'
                    ),
                    { num_notes: 3 }
                ),
                notes(
                    'E5/q[id="n1"]',
                    'E5/8[id="n2"]',
                    'B4/8/r'
                )
            )
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    curve('n1', 'n2');

    render();
})();
