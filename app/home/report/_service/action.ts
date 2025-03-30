"use server";
import { reportProblemType } from "@/model/reportModel";
import { createClient } from "@/utils/supabase/server";

export async function submitReportAction(data: reportProblemType) {
    try {
        const supabase = await createClient();

        const { error: reportError } = await supabase
            .from("reports")
            .insert(data)

        if (reportError) {
            throw new Error(reportError.message)
        }

    } catch (error) {
        console.error(error)
        throw error;
    }
}