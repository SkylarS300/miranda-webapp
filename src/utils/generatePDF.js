// src/utils/generatePDF.js

export async function generatePDF(section) {
    // ✅ Prevent build-time/server-side execution
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
            doc.text(line, 15, y);
            y += lineSpacing;
        });
        y += 4;
    };

    doc.setFontSize(16);
    doc.text(section.pdfTitle || section.title, 15, y);
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

    doc.save(`${section.title.replace(/\s+/g, '_')}.pdf`);
}
