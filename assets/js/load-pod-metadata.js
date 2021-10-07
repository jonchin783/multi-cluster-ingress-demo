$(document).ready(function () {
    $('.ui.dropdown')
        .dropdown()
    ;

    $('.menu .item')
        .tab()
    ;

    $('.message .close')
        .on('click', function() {
            $(this)
                .closest('.message')
                .transition('fade')
            ;
        })
    ;
    $('.sidebar')
        .sidebar({
            dimPage: false,
            closable: false,
            scrollLock: true,
            debug: false,
            verbose: false,
            delaySetup: true

        })
        .sidebar('attach events', '#vk-header-icon-a')
        .sidebar('setting', 'transition', 'push');

    const MEDICAL_RECORD = 'Most Responsible Diagnosis: COPD Exacerbation  Active Issues Managed in Hospital:  Pulmonary edema Microcytic anemia Gout Purpuric rash NYD  Course in Hospital:  Mr. Johnson arrived in the ER from nursing home with a three-day history of worsening shortness of breath, yellow-green sputum, and increased sputum production. He was subsequently diagnosed with a COPD exacerbation and was satting at 84% on 4L O2 by nasal prongs. He was stepped up to BiPAP for 24 hours and prednisone, ciprofloxacin, and around the clock puffers were initiated. By day 2 of admission he was stepped down to oxygen by nasal prongs and QID puffers.  In terms of respiratory complications, Mr. Johnson had a sudden hypoxic resp failure on day 3 of admission. CCOT was involved, but ICU was avoided. He was found to be in pulmonary edema that responded to diuresis. Last documented echo was completed 15 years ago and a repeat echo was ordered to be completed as an outpatient.    Unfortunately on day 4 of admission Mr. Johnson also developed gout in the left MTP. This limited his mobility and contributed to deconditioning for which PT was involved. Also, by day 6 of admission a purpuric rash was noted on the upper and lower extremities, cause was unknown and punch biopsy was performed. The results are still pending. Lastly, upon admission Mr. Johnson was found to have a microcytic anemia. On history Mr. Johnson states he no longer eats much red meat or leafy greens, preferring tea and toast for most of his meals. There was no history of bleeding and previous FOBT testing was normal. Further testing revealed iron deficiency anemia and therapy with ferrous fumarate was initiated.   On day of discharge, Ms. Johnson was on room air but continued to be on Lasix.  Continued Home Medications: Albuterol 2 puffs q 4-6 hours daily Atrovent 2 puffs q 6h ASA 325 mg daily Metoprolol 25 mg BID Atorvastatin 40 mg daily Ramipril 10 mg daily Amlodipine 5 mg daily Metformin 1000 mg BID Terazosin 5 mg qhs Tylenol 325 mg qhs Lactulose 15cc qhs prn Citalopram 20 mg daily Multivitamin  Medications Changes: Ramipril was STOPPED Lasix was STARTED at 20mg PO BID Amlodipine was INCREASED to 10mg daily Ferrous fumarate 325 mg QHS was STARTED  Important Test Results:  CXR completed April 20th 2019 revealed pulmonary edema and enlarged cardiac silhouette Sputum culture collected April 18th 2019 was positive for pseudomonas aeruginosa  Pending Tests or Results: Echo ordered as outpatient Skin biopsy results pending  Follow-up Plans:  We asked the patient to make an appointment with their family MD next week. The patient will follow up in urgent resp clinic in 2-4 weeks time. Since moving to London the patient is not currently followed by a respirologist and since this is the third exacerbation this year a goals of care discussion may be warranted. The patient was also seen by our COPD Navigator Team and arrangements have been made to be seen as an outpatient. ';
    const RESEARCH_PAPER = 'Low-grade gliomas in adults have an incidence of 0.8 to 1.2 per 100 000, and their causes are unknown. Despite their histological classification as low-grade, they cannot be cured by any current treatment mode, and no class I evidence exists to guide initial treatment of these tumors. Median survival ranges between 7.5 years and 10 years, with a 5-year survival probability between 55% and 86%. The prognosis depends on age, World Health Organization (WHO) tumor grade, Karnofsky performance score, cytological type (oligodendroglioma vs astrocytoma), and, potentially, the extent of resection. Oligodendrogliomas with loss of heterozygosity on chromosomes 1p and 19q have a distinctly more favorable prognosis and therapeutic response rate. Low-grade tumors progress to high-grade gliomas with aggressive biological behavior at increasing frequency with advancing age. Ms P is a young woman with a previously treated oligodendroglioma, WHO grade II, with loss of heterozygosity on chromosomes 1p and 19q, which at a third resection had transformed into an oligodendroglioma of WHO grade III. She wants to know her current and future therapeutic options.';
    const LAB_FORM = 'H. pylori DNA Analysis\n3\nDiagnostic\nSolutions\nlaboratory\n5895 Shiloh Rd, Ste 101\nAlpharetta GA 30005\n877-485-5336\nPatient: Ima Sample\nCollected: 2/10/2018\nDOB: 7/11/1981\nAccession: 20180212-0001\nReceived: 2/12/2018\nCompleted: 2/12/2018\nOrdered by: Diane Farhi, MD\nH. pylori\nResult\nNormal\n2.9e3\nHigh\n<1.0e3\nHelicobacter pylori\nVirulence Factor, babA\nPositive\nPositive\nVirulence Factor, cagA\nVirulence Factor, dupa\nVirulence Factor, iceA\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nPositive\nPositive\nVirulence Factor, oipA\nVirulence Factor, vacA\nVirulence Factor, virB\nVirulence Factor, virD\nAntibiotic Resistance Genes, phenotypes\nHelicobacter\nResult\nClarithromycin\nPositive\nExpected Result\nAbsent\nA21420\nAbsent\nA2142G\nAbsent\nA2143G\nPresent\nFluoroquinolones\nNegative\nAbsent\ngyrA N87K\nAbsent\ngyrA D91N\nAbsent\ngyrA D91G\nAbsent\nAbsent\nAbsent\ngyrB S479N\nTetracycline\ngyrB R484K\nPositive\nAbsent\nPBP1A S414R\nPresent\nPBP1A T556S\nAbsent\nPBP1A N562Y\nAbsent\nAmoxicillin\nNegative\nAbsent\nA926G\nAbsent\nAGA926-928TTC Absent\nThe assays were developed and the perfomance characteristics\ndetermined by Diagnostic Solutions Laboratory.\nCLIA# 11D-2097795\nMedical Director - Diane Farhi, MD\n1\n';
    //document.getElementById("document-content").innerHTML = podName + "\n" + nodeName + "\n" + podNamespace + "\n" + podIP + "\n" + podServiceAccount + "\n";


    $("#use-sample-medical-record").click(function (e) {
        //console.log(`Your port is ${process.env.PORT}`); // 8626
        //console.log("TEST");
        //alert(`Your port is ${podName}`); // 8626
        e.preventDefault();
        //document.getElementById("document-content").value = ${process.env.PORT};
    });
    $("#use-sample-research-paper").click(function (e) {
        e.preventDefault();
        document.getElementById("document-content").value = RESEARCH_PAPER;
    });
    $("#use-sample-lab-form").click(function (e) {
        e.preventDefault();
        document.getElementById("document-content").value = LAB_FORM;
    });

    $("#analyze-button").click(function (e) {
        if (document.getElementById("document-content").value == "") {
            $.uiAlert({
                textHead: "ERROR", // header
                text: 'Please provide input to document content', // Text
                bgcolor: '#DB2828', // background-color
                textcolor: '#fff', // color
                position: 'top-right',// position . top And bottom ||  left / center / right
                icon: 'remove circle', // icon in semantic-UI
                time: 3, // time
            });
        } else {
            $('#sole_spinner').css('display', 'block');
            $.ajax({
                type: "POST",
                url: "/api/analyzeHealth",
                dataType: "json",
                data: {
                    document: $("#document-content").val()
                },
                success: function (result) {
                    $('#sole_spinner').css('display', 'none');
                    analyze_entities(result['entities']);
                    analyze_entity_mentions(result['entityMentions']);
                    analyze_relations(result);
                    $('#analysis-results-horizontal-divider').css('display', 'block');
                    $('#knowledge-panel-body').css('display', 'block');
                    document.getElementById("json-output-content").value = JSON.stringify(result, null, 4);
                },
                error: function (result) {
                    $('#sole_spinner').css('display', 'none');
                }
            });
        }
    });

    $("#save-json-output").click(function (e) {
        e.preventDefault();
        var filename = "json-output.txt";
        saveTextAsFile(document.getElementById("json-output-content").value,filename);
        $.uiAlert({
            textHead: 'DOWNLOADED JSON output as text file', // header
            text: 'The JSON output is downloaded to your computer.', // Text
            bgcolor: '#55a9ee', // background-color
            textcolor: '#fff', // color
            position: 'top-right',// position . top And bottom ||  left / center / right
            icon: 'info circle', // icon in semantic-UI
            time: 3, // time
        })
    });

    $("#copy-json-output").click(function (e) {
        let output = document.getElementById("json-output-content");
        output.select();
        document.execCommand('copy');
        $.uiAlert({
            textHead: 'COPIED to clipboard', // header
            text: 'The JSON output is copied to clipboard.', // Text
            bgcolor: '#55a9ee', // background-color
            textcolor: '#fff', // color
            position: 'top-right',// position . top And bottom ||  left / center / right
            icon: 'info circle', // icon in semantic-UI
            time: 3, // time
        })
    });

    $("#clear-document").click(function (e) {
        e.preventDefault();
        document.getElementById("document-content").value = "";
    });

    $("#first-tab").click(function (e) {
        e.preventDefault();
        $('#knowledge-panel-body').css('display', 'block');
        $('#context-assess-body').css('display', 'none');
        $('#relation-extract-body').css('display', 'none');
        $('#view-json-body').css('display', 'none');
    });

    $("#second-tab").click(function (e) {
        e.preventDefault();
        $('#knowledge-panel-body').css('display', 'none');
        $('#context-assess-body').css('display', 'block');
        $('#relation-extract-body').css('display', 'none');
        $('#view-json-body').css('display', 'none');
    });

    $("#third-tab").click(function (e) {
        e.preventDefault();
        $('#knowledge-panel-body').css('display', 'none');
        $('#context-assess-body').css('display', 'none');
        $('#relation-extract-body').css('display', 'block');
        $('#view-json-body').css('display', 'none');
    });

    $("#fourth-tab").click(function (e) {
        e.preventDefault();
        $('#knowledge-panel-body').css('display', 'none');
        $('#context-assess-body').css('display', 'none');
        $('#relation-extract-body').css('display', 'none');
        $('#view-json-body').css('display', 'block');
    });

    $("#fifth-tab").click(function (e) {
        e.preventDefault();
        $('#knowledge-panel-body').css('display', 'none');
        $('#context-assess-body').css('display', 'none');
        $('#relation-extract-body').css('display', 'none');
        $('#view-json-body').css('display', 'none');
    });
    //document.getElementById("document-content").value = "mcg-demo-pod";

    //document.getElementById("document-content").innerHTML = podName + "\n" + nodeName + "\n" + podNamespace + "\n" + podIP + "\n" + podServiceAccount + "\n";

});

