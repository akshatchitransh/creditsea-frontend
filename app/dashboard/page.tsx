"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";

import PendingLoansTable from "@/components/dashboard/pending-loans-table";
import DisbursementTable from "@/components/dashboard/disbursement-table";
import CollectionTable from "@/components/dashboard/collection-table";
import SalesLeadsTable from "@/components/dashboard/sales-leads-table";

import ProtectedRoute from "@/components/auth/protected-route";

import { getUserFromToken } from "@/lib/auth";
import { ROLES } from "@/lib/roles";

export default function DashboardPage() {

  const user = getUserFromToken();

  const role = user?.role;

  return (
    <ProtectedRoute>

      <DashboardLayout>

        <div className="space-y-8">

          {/* HEADER */}
          <div>

            <h1 className="text-4xl font-bold">
              Operations Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Logged in as {role}
            </p>

          </div>

          {/* ADMIN */}
          {role === ROLES.ADMIN && (
            <>
              <SalesLeadsTable />

              <PendingLoansTable />

              <DisbursementTable />

              <CollectionTable />
            </>
          )}

          {/* SALES */}
          {role === ROLES.SALES && (
            <SalesLeadsTable />
          )}

          {/* SANCTION */}
          {role === ROLES.SANCTION && (
            <PendingLoansTable />
          )}

          {/* DISBURSEMENT */}
          {role === ROLES.DISBURSEMENT && (
            <DisbursementTable />
          )}

          {/* COLLECTION */}
          {role === ROLES.COLLECTION && (
            <CollectionTable />
          )}

        </div>

      </DashboardLayout>

    </ProtectedRoute>
  );
}