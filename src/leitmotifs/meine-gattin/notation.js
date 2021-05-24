(function () {
    const { measure, notes, curve, tuplet, render } = new VF.Sheet({
        id: 'meine-gattin',
        measureWidths: [200, 200, 100],
        height: 160,
        offsetY: 20
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/h/r', 'E5/h/#1')
        ])
        .addClef('bass')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            tuplet(notes('E5/h/#2', 'Fb5/h/#3', 'Gb5/h/#4', { stem: 'up' }))
        ], [
            notes('E5/w/#5')
        ]);

    curve(1, 2, { invert: true });
    curve(1, 5, { invert: true });

    // Measure 3
    measure()
        .addNotes([
             notes('(E5 F5 G5 B5 D6)/w')
        ]);

    curve(3);
    curve(4, { invert: true });
    curve(5, { invert: true });

    render();
})();
