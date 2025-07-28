// src/utils/generatePDF.js

export async function generatePDF(section) {
    if (typeof window === 'undefined') return;

    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 20;

    const lineSpacing = 8;
    const wrapOptions = { maxWidth: 180 };

    const writeText = (text, bold = false) => {
        if (bold) doc.setFont(undefined, 'bold');
        else doc.setFont(undefined, 'normal');
        const lines = doc.splitTextToSize(text, wrapOptions.maxWidth);
        lines.forEach((line) => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            doc.text(line, 15, y);
            y += lineSpacing;
        });
        y += 4;
    };

    doc.setFontSize(16);
    doc.text(section.pdfTitle || section.title || 'Miranda Guide', 15, y);
    y += 10;

    doc.setFontSize(12);
    if (section.response) writeText(section.response, false);

    if (section.details) {
        writeText('Details:', true);
        section.details.forEach(par => writeText(par));
    }

    if (section.dos?.length) {
        writeText('✅ Do:', true);
        section.dos.forEach(item => writeText('• ' + item));
    }

    if (section.donts?.length) {
        writeText('🚫 Don’t:', true);
        section.donts.forEach(item => writeText('• ' + item));
    }

    if (section.tips?.length) {
        writeText('Tips:', true);
        section.tips.forEach(item => writeText('• ' + item));
    }

    if (section.related?.length) {
        writeText('Related Questions:', true);
        section.related.forEach(qa => {
            writeText('Q: ' + qa.question, true);
            writeText('A: ' + qa.answer);
        });
    }

    if (section.source) {
        writeText('Source: ' + section.source);
    }

    // Optional: timestamp footer
    if (y > 270) {
        doc.addPage();
        y = 20;
    }
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, 15, 285);

    const safeTitle = (section.pdfTitle || section.title || 'miranda_guide').replace(/\s+/g, '_');
    doc.save(`${safeTitle}.pdf`);
}
