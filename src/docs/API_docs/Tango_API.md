# Tango API by MakeGov

**Version:** 3.20.11

**Last updated:** Mon, 01 Dec 2025 21:19:09 GMT | [CHANGELOG](https://github.com/makegov/tango-public/blob/main/CHANGELOG.md)

**Contact:** tango@makegov.com

## Servers

- `https://tango.makegov.com` - 

## Authentication

### API Key

- **Type:** apiKey
- **In:** header
- **Name:** X-API-KEY
- **Description:** API key authentication

### oauth2

- **Type:** oauth2

## Endpoints

### Accounts

#### `GET` /api/accounts/usage/

**Operation ID:** `accounts_usage_list`

ViewSet for API usage analytics.
Users can only view their own usage data.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAPIUsageHourlyList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAPIUsageHourlyList`

---

#### `GET` /api/accounts/usage/{id}/

**Operation ID:** `accounts_usage_retrieve`

ViewSet for API usage analytics.
Users can only view their own usage data.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageHourly`
  - Content-Type: `text/csv`
  - Schema: `APIUsageHourly`

---

#### `GET` /api/accounts/usage/alerts/

**Operation ID:** `accounts_usage_alerts_list`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAPIUsageAlertList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAPIUsageAlertList`

---

#### `POST` /api/accounts/usage/alerts/

**Operation ID:** `accounts_usage_alerts_create`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `APIUsageAlert`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `APIUsageAlert`
- Content-Type: `multipart/form-data`
- Schema: `APIUsageAlert`

**Responses:**

- **201:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageAlert`
  - Content-Type: `text/csv`
  - Schema: `APIUsageAlert`

---

#### `GET` /api/accounts/usage/alerts/{id}/

**Operation ID:** `accounts_usage_alerts_retrieve`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageAlert`
  - Content-Type: `text/csv`
  - Schema: `APIUsageAlert`

---

#### `PUT` /api/accounts/usage/alerts/{id}/

**Operation ID:** `accounts_usage_alerts_update`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `APIUsageAlert`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `APIUsageAlert`
- Content-Type: `multipart/form-data`
- Schema: `APIUsageAlert`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageAlert`
  - Content-Type: `text/csv`
  - Schema: `APIUsageAlert`

---

#### `PATCH` /api/accounts/usage/alerts/{id}/

**Operation ID:** `accounts_usage_alerts_partial_update`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `PatchedAPIUsageAlert`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `PatchedAPIUsageAlert`
- Content-Type: `multipart/form-data`
- Schema: `PatchedAPIUsageAlert`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageAlert`
  - Content-Type: `text/csv`
  - Schema: `APIUsageAlert`

---

#### `DELETE` /api/accounts/usage/alerts/{id}/

**Operation ID:** `accounts_usage_alerts_destroy`

ViewSet for managing API usage alerts.
Users can create, view, update, and delete their own alerts.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **204:** No response body

---

#### `POST` /api/accounts/usage/alerts/{id}/test/

**Operation ID:** `accounts_usage_alerts_test_create`

Test an alert by manually triggering it

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `APIUsageAlert`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `APIUsageAlert`
- Content-Type: `multipart/form-data`
- Schema: `APIUsageAlert`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageAlert`
  - Content-Type: `text/csv`
  - Schema: `APIUsageAlert`

---

#### `GET` /api/accounts/usage/endpoints/

**Operation ID:** `accounts_usage_endpoints_retrieve`

Get endpoint usage statistics for the authenticated user.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `EndpointUsage`
  - Content-Type: `text/csv`
  - Schema: `EndpointUsage`

---

#### `GET` /api/accounts/usage/export/

**Operation ID:** `accounts_usage_export_retrieve`

Export usage data in CSV or JSON format.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `APIUsageHourly`
  - Content-Type: `text/csv`
  - Schema: `APIUsageHourly`

---

#### `GET` /api/accounts/usage/history/

**Operation ID:** `accounts_usage_history_retrieve`

Get historical usage data for the authenticated user.
Supports daily and hourly granularity.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `HistoricalUsage`
  - Content-Type: `text/csv`
  - Schema: `HistoricalUsage`

---

#### `GET` /api/accounts/usage/summary/

**Operation ID:** `accounts_usage_summary_retrieve`

Get current usage summary for the authenticated user.
Shows real-time data from Redis for today and basic recommendations.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `UsageSummary`
  - Content-Type: `text/csv`
  - Schema: `UsageSummary`

---

### Agencies

#### `GET` /api/agencies/

**Operation ID:** `agencies_list`

API endpoints for agencies lookup and detail.

Use an agency code to retrieve information about a specific agency.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `search` | query | string | No | Filter by . Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logic). |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAgencyList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAgencyList`

---

#### `GET` /api/agencies/{code}/

**Operation ID:** `agencies_retrieve`

API endpoint that allows agency detail lookup by agency code.

Use an agency code to retrieve information about a specific agency.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes | A unique value identifying this agency. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `Agency`
  - Content-Type: `text/csv`
  - Schema: `Agency`

---

#### `GET` /api/agencies/{code}/contracts/awarding/

**Operation ID:** `agencies_contracts_awarding_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `award_type` | query | string | No | Filter by award type. Examples: A, B, C, D. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_end_date_gte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `pop_end_date_lte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (based on ultimate period of performance end date) (YYYY-MM-DD f |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (based on ultimate period of performance end date) (YYYY-MM-DD  |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, award_type, naics_code, psc_code, total_contract_v |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedContractListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedContractListList`

---

#### `GET` /api/agencies/{code}/contracts/funding/

**Operation ID:** `agencies_contracts_funding_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `award_type` | query | string | No | Filter by award type. Examples: A, B, C, D. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_end_date_gte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `pop_end_date_lte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (based on ultimate period of performance end date) (YYYY-MM-DD f |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (based on ultimate period of performance end date) (YYYY-MM-DD  |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, award_type, naics_code, psc_code, total_contract_v |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedContractListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedContractListList`

---

### Api Keys

#### `GET` /api/api-keys/

**Operation ID:** `api_keys_list`

API endpoint that allows API keys to be viewed.

Use this endpoint to get a list of your API keys.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: Array of `APIKey`
  - Content-Type: `text/csv`
  - Schema: Array of `APIKey`

---

### Assistance_Listings

#### `GET` /api/assistance_listings/

**Operation ID:** `assistance_listings_list`

API endpoint that allows Assistance Listing (CFDA) information to be viewed.

Use this endpoint to get a list of assistance listings.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAssistanceListingList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAssistanceListingList`

---

#### `GET` /api/assistance_listings/{number}/

**Operation ID:** `assistance_listings_retrieve`

API endpoint that allows Assistance Listing detail lookup by number.

Use this endpoint to get information about a specific assistance listing by its number.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `number` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `AssistanceListingDetail`
  - Content-Type: `text/csv`
  - Schema: `AssistanceListingDetail`

---

### Business_Types

#### `GET` /api/business_types/

**Operation ID:** `business_types_list`

API endpoint that allows Business Types to be viewed.

Use this endpoint to get a list of business types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedBusinessTypeList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedBusinessTypeList`

---

#### `GET` /api/business_types/{code}/

**Operation ID:** `business_types_retrieve`

API endpoint that allows Business Type detail lookup by code.

Use this endpoint to get a specific business type by code.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `BusinessType`
  - Content-Type: `text/csv`
  - Schema: `BusinessType`

---

### Company

#### `GET` /api/company/rag/

**Operation ID:** `company_rag_retrieve`

Retrieve company profile, related people, and related news for RAG.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `CompanyRAG`
  - Content-Type: `text/csv`
  - Schema: `CompanyRAG`

---

### Contracts

#### `GET` /api/contracts/

**Operation ID:** `contracts_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `award_type` | query | string | No | Filter by award type. Examples: A, B, C, D. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_end_date_gte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `pop_end_date_lte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (based on ultimate period of performance end date) (YYYY-MM-DD f |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (based on ultimate period of performance end date) (YYYY-MM-DD  |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, award_type, naics_code, psc_code, total_contract_v |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedContractListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedContractListList`

---

#### `GET` /api/contracts/{key}/

**Operation ID:** `contracts_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this contract. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PremiumContractDetail`
  - Content-Type: `text/csv`
  - Schema: `PremiumContractDetail`

---

#### `GET` /api/contracts/{key}/subawards/

**Operation ID:** `contracts_subawards_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `award_key` | query | string | No | Award key |
| `prime_uei` | query | string | No | Unique Entity Identifier |
| `sub_uei` | query | string | No | Unique Entity Identifier |
| `awarding_agency` | query | string | No | Awarding agency code |
| `funding_agency` | query | string | No | Awarding agency code |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `recipient` | query | string | No | Search by recipient |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `shape` | query | string | No | **Available Root Fields:** key, award_key, piid, prime_award_total_outlayed_amount, prime_award_amou |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedSubawardList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedSubawardList`

---

#### `GET` /api/contracts/{key}/transactions/

**Operation ID:** `contracts_transactions_list`

API endpoint that allows contract transactions lookup.

Use a contract key to retrieve information about a contract's transactions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAwardTransactionList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAwardTransactionList`

---

### Departments

#### `GET` /api/departments/

**Operation ID:** `departments_list`

API endpoints for departments lookup and detail.

Use a department code to retrieve information about a specific department.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedDepartmentList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedDepartmentList`

---

#### `GET` /api/departments/{code}/

**Operation ID:** `departments_retrieve`

API endpoint that allows department detail lookup by department code.

Use a department code to retrieve information about a specific department.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | integer | Yes | A unique value identifying this department. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `Department`
  - Content-Type: `text/csv`
  - Schema: `Department`

---

### Entities

#### `GET` /api/entities/

**Operation ID:** `entities_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `search` | query | string | No |  |
| `uei` | query | string | No | Unique Entity Identifier |
| `name` | query | string | No | The company name |
| `socioeconomic` | query | string | No |  |
| `naics` | query | string | No |  |
| `psc` | query | string | No |  |
| `cage_code` | query | string | No | CAGE Code |
| `state` | query | string | No |  |
| `purpose_of_registration_code` | query | string | No |  |
| `zip_code` | query | string | No |  |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `shape` | query | string | No | **Available Root Fields:** business_types, cage_code, capabilities, congressional_district, dba_name |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedEntityListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedEntityListList`

---

#### `GET` /api/entities/{uei}/

**Operation ID:** `entities_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes | A unique value identifying this entity. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `EntityDetail`
  - Content-Type: `text/csv`
  - Schema: `EntityDetail`

---

#### `GET` /api/entities/{uei}/contracts/

**Operation ID:** `entities_contracts_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `award_type` | query | string | No | Filter by award type. Examples: A, B, C, D. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_end_date_gte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `pop_end_date_lte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (based on ultimate period of performance end date) (YYYY-MM-DD f |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (based on ultimate period of performance end date) (YYYY-MM-DD  |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, award_type, naics_code, psc_code, total_contract_v |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedContractListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedContractListList`

---

#### `GET` /api/entities/{uei}/idvs/

**Operation ID:** `entities_idvs_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `idv_type` | query | string | No | Filter by IDV type. Examples: A, B, C, D, E. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 20 |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 2 |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `last_date_to_order_gte` | query | string | No | Filter by last date to order on or after date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, |
| `last_date_to_order_lte` | query | string | No | Filter by last date to order on or before date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31 |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, naics_code, psc_code, total_contract_value, descri |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedIDVListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedIDVListList`

---

#### `GET` /api/entities/{uei}/metrics/{months}/{period_grouping}/

**Operation ID:** `entities_metrics_retrieve`

Get the metrics data for the given identifier.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `months` | path | string | Yes |  |
| `period_grouping` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `EntityMetrics`
  - Content-Type: `text/csv`
  - Schema: `EntityMetrics`

---

#### `GET` /api/entities/{uei}/otas/

**Operation ID:** `entities_otas_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `uei` | query | string | No | Unique Entity Identifier |
| `naics` | query | string | No |  |
| `psc` | query | string | No |  |
| `set_aside` | query | string | No |  |
| `awarding_agency` | query | string | No | Filter by awarding agency |
| `funding_agency` | query | string | No | Filter by funding agency or department |
| `piid` | query | string | No | Award PIID |
| `search` | query | string | No | Search |
| `award_date` | query | string | No |  |
| `award_date_gte` | query | string | No |  |
| `award_date_lte` | query | string | No |  |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `pop_start_date_gte` | query | string | No |  |
| `pop_start_date_lte` | query | string | No |  |
| `pop_end_date_gte` | query | string | No | Period of performance end date on or after |
| `pop_end_date_lte` | query | string | No | Period of performance end date on or before |
| `expiring_gte` | query | string | No | Expiring on or after date (based on ultimate completion date) |
| `expiring_lte` | query | string | No | Expiring on or before date (based on ultimate completion date) |
| `recipient` | query | string | No | Search by recipient |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `ordering` | query | array | No | Ordering  * `award_date` - Award date * `-award_date` - Award date (descending) * `obligated` - Obli |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOTAListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOTAListList`

---

#### `GET` /api/entities/{uei}/otidvs/

**Operation ID:** `entities_otidvs_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `ordering` | query | string | No | Which field to use when ordering the results. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOTIDVListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOTIDVListList`

---

#### `GET` /api/entities/{uei}/subawards/

**Operation ID:** `entities_subawards_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | path | string | Yes |  |
| `award_key` | query | string | No | Award key |
| `prime_uei` | query | string | No | Unique Entity Identifier |
| `sub_uei` | query | string | No | Unique Entity Identifier |
| `awarding_agency` | query | string | No | Awarding agency code |
| `funding_agency` | query | string | No | Awarding agency code |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `recipient` | query | string | No | Search by recipient |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `shape` | query | string | No | **Available Root Fields:** key, award_key, piid, prime_award_total_outlayed_amount, prime_award_amou |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedSubawardList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedSubawardList`

---

### Forecasts

#### `GET` /api/forecasts/

**Operation ID:** `forecasts_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agency` | query | string | No | Filter by agency acronym. Supports disjunctive (HHS\|DHS) and conjunctive (HHS,DHS) patterns |
| `source_system` | query | string | No | Filter by source system. Supports disjunctive (HHS\|DHS\|GSA) and conjunctive patterns |
| `naics_code` | query | string | No | Filter by exact NAICS code (6 digits). Supports disjunctive (541511\|541512) and conjunctive pattern |
| `fiscal_year` | query | integer | No | Filter by exact fiscal year |
| `status` | query | string | No | Filter by status (case-insensitive, partial match). Supports disjunctive (PUBLISHED\|DRAFT) patterns |
| `search` | query | string | No | Full-text search in title and description. Supports phrases in quotes and OR/AND patterns |
| `naics_starts_with` | query | string | No | Filter by NAICS code prefix (e.g., "54" for Professional Services). Supports OR/AND patterns |
| `fiscal_year_gte` | query | integer | No | Filter by fiscal year greater than or equal to |
| `fiscal_year_lte` | query | integer | No | Filter by fiscal year less than or equal to |
| `award_date_after` | query | string | No | Filter by award date on or after (YYYY-MM-DD) |
| `award_date_before` | query | string | No | Filter by award date on or before (YYYY-MM-DD) |
| `modified_after` | query | string | No | Filter by when last modified in Tango on or after (YYYY-MM-DD) |
| `modified_before` | query | string | No | Filter by when last modified in Tango on or before (YYYY-MM-DD) |
| `ordering` | query | string | No | Which field to use when ordering the results. |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedForecastList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedForecastList`

---

#### `GET` /api/forecasts/{id}/

**Operation ID:** `forecasts_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | integer | Yes | A unique integer value identifying this forecast. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `ForecastDetail`
  - Content-Type: `text/csv`
  - Schema: `ForecastDetail`

---

### Grants

#### `GET` /api/grants/

**Operation ID:** `grants_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agency` | query | string | No | Filter by agency abbreviation |
| `response_date_after` | query | string | No | Response due date |
| `response_date_before` | query | string | No | Response due date |
| `cfda_number` | query | string | No | Filter by CFDA number |
| `applicant_types` | query | enum: 00, 01, 02, 04, 05... | No | Eligibility type  * `00` - State governments * `01` - County governments * `02` - City or township g |
| `funding_categories` | query | enum: AG, AR, BC, CD, CP... | No | Funding categories  * `AG` - Agriculture * `AR` - Arts * `BC` - Business and Commerce * `CD` - Commu |
| `funding_instruments` | query | enum: CA, D, DESCRIPTION, G, L... | No | Funding instruments  * `CA` - Cooperative Agreement * `D` - Direct Payment * `G` - Grant * `L` - Loa |
| `opportunity_number` | query | string | No | Filter by opportunity number |
| `posted_date_after` | query | string | No | Posted date |
| `posted_date_before` | query | string | No | Posted date |
| `search` | query | string | No | Search by query |
| `status` | query | enum: F, P | No | Grant status  * `P` - Posted * `F` - Forecasted |
| `ordering` | query | string | No | Which field to use when ordering the results. |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `shape` | query | string | No | **Available Root Fields:** agency_code, applicant_eligibility_description, description, funding_acti |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedGrantOpportunityListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedGrantOpportunityListList`

---

#### `GET` /api/grants/{grant_id}/

**Operation ID:** `grants_retrieve`

API endpoint that allows grant detail lookup by grant ID.

Use this endpoint to get detailed information about a specific grant by its ID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `grant_id` | path | integer | Yes | A unique value identifying this grant opportunity. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `GrantOpportunityDetail`
  - Content-Type: `text/csv`
  - Schema: `GrantOpportunityDetail`

---

### Idvs

#### `GET` /api/idvs/

**Operation ID:** `idvs_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `idv_type` | query | string | No | Filter by IDV type. Examples: A, B, C, D, E. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 20 |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 2 |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `last_date_to_order_gte` | query | string | No | Filter by last date to order on or after date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, |
| `last_date_to_order_lte` | query | string | No | Filter by last date to order on or before date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31 |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, naics_code, psc_code, total_contract_value, descri |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedIDVListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedIDVListList`

---

#### `GET` /api/idvs/{identifier}/summary/

**Operation ID:** `idvs_summary_retrieve`

API endpoint that allows access to the IDV summary data for a specific solicitation.

Use a solicitation identifier to retrieve information about the IDV's awards.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identifier` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |
| `identifier` | query | string | No | The identifier for the IDV group, usually the solicitation number. |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `AwardsIDVSummaryMV`
  - Content-Type: `text/csv`
  - Schema: `AwardsIDVSummaryMV`

---

#### `GET` /api/idvs/{identifier}/summary/awards/

**Operation ID:** `idvs_summary_awards_list`

API endpoint that allows access to the paginated list of IDVs under a solicitation identifier.

Use a solicitation identifier to retrieve information about the IDV's awards.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `identifier` | path | string | Yes |  |
| `uei` | query | string | No | Unique Entity Identifier |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No |  |
| `fiscal_year` | query | integer | No |  |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `idv_type` | query | enum: A, B, C, D, E... | No | IDV type  * `A` - GWAC * `a` - GWAC * `B` - IDC * `b` - IDC * `C` - FSS * `c` - FSS * `D` - BOA * `d |
| `naics` | query | string | No |  |
| `psc` | query | string | No |  |
| `set_aside` | query | string | No |  |
| `awarding_agency` | query | string | No | Filter by awarding agency |
| `funding_agency` | query | string | No | Filter by funding agency or department |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No |  |
| `award_date_lte` | query | string | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `pop_start_date_gte` | query | string | No |  |
| `pop_start_date_lte` | query | string | No |  |
| `expiring_gte` | query | string | No | Expiring on or after date (alias for last_date_to_order_gte) |
| `expiring_lte` | query | string | No | Expiring on or before date (alias for last_date_to_order_lte) |
| `recipient` | query | string | No | Search by recipient |
| `ordering` | query | string | No | Order results by field (prefix with '-' for descending). Options: award_date, obligated, total_contr |
| `last_date_to_order_gte` | query | string | No | Last date to order on or after date |
| `last_date_to_order_lte` | query | string | No | Last date to order on or before date |
| `page` | query | integer | No | Page number for pagination |
| `limit` | query | integer | No | Number of results per page (max 100) |
| `format` | query | enum: csv, json | No |  |
| `identifier` | query | string | No | The identifier for the IDV group, usually the solicitation number. |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedIDVSummaryListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedIDVSummaryListList`

---

#### `GET` /api/idvs/{key}/

**Operation ID:** `idvs_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this idv. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PremiumIDVDetail`
  - Content-Type: `text/csv`
  - Schema: `PremiumIDVDetail`

---

#### `GET` /api/idvs/{key}/awards/

**Operation ID:** `idvs_awards_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `award_type` | query | string | No | Filter by award type. Examples: A, B, C, D. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_end_date_gte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `pop_end_date_lte` | query | string | No | Filter by period of performance end date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (based on ultimate period of performance end date) (YYYY-MM-DD f |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (based on ultimate period of performance end date) (YYYY-MM-DD  |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, award_type, naics_code, psc_code, total_contract_v |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedContractListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedContractListList`

---

#### `GET` /api/idvs/{key}/idvs/

**Operation ID:** `idvs_idvs_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `uei` | query | string | No | Filter by UEI (Unique Entity Identifier). Examples: ABCDE1234567, FGHIJ8901234, etc.. Use \| to sepa |
| `piid` | query | string | No | Award PIID |
| `award_date` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `idv_type` | query | string | No | Filter by IDV type. Examples: A, B, C, D, E. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `awarding_agency` | query | string | No | Filter by awarding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR log |
| `funding_agency` | query | string | No | Filter by funding agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logi |
| `search` | query | string | No | Search |
| `award_date_gte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `award_date_lte` | query | string | No | Filter by award date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `fiscal_year_gte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `fiscal_year_lte` | query | string | No | Filter by fiscal year (YYYY format). Examples: 2023, 2022, 2021 |
| `pop_start_date_gte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `pop_start_date_lte` | query | string | No | Filter by period of performance start date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 20 |
| `expiring_gte` | query | string | No | Filter by expiring on or after date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 20 |
| `expiring_lte` | query | string | No | Filter by expiring on or before date (alias for last_date_to_order) (YYYY-MM-DD format). Examples: 2 |
| `recipient` | query | string | No | Filter by awardee. Examples: EGQFST8KUQQ5, Disney, etc.. Use \| to separate multiple values (OR logi |
| `ordering` | query | string | No | Filter by ordering. Examples: award_date, obligated, recipient_name. |
| `last_date_to_order_gte` | query | string | No | Filter by last date to order on or after date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, |
| `last_date_to_order_lte` | query | string | No | Filter by last date to order on or before date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31 |
| `format` | query | enum: csv, json | No |  |
| `limit` | query | integer | No | Number of results per page (default: 25) |
| `cursor` | query | string | No | Cursor for pagination navigation. Use the 'next' URL from the previous response. |
| `shape` | query | string | No | **Available Root Fields:** key, piid, award_date, naics_code, psc_code, total_contract_value, descri |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedIDVListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedIDVListList`

---

#### `GET` /api/idvs/{key}/transactions/

**Operation ID:** `idvs_transactions_list`

API endpoint that allows access to the paginated list of an IDV's transactions.

Use an award key to retrieve information about the IDV's transactions.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedAwardTransactionList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedAwardTransactionList`

---

### Naics

#### `GET` /api/naics/

**Operation ID:** `naics_list`

API endpoint that allows NAICS codes lookup.

Use this endpoint to get a list of NAICS codes by name, code, or other search criteria.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `search` | query | string | No | Filter by code or description. Examples: 111110, 111, forestry. |
| `revenue_limit` | query | string | No | Filter by revenue limit. Examples: 20000000, 50000000. |
| `employee_limit` | query | string | No | Filter by employee limit. Examples: 100, 750, 1500. |
| `revenue_limit_gte` | query | string | No | Filter by revenue limit. Examples: 20000000, 50000000. |
| `revenue_limit_lte` | query | string | No | Filter by revenue limit. Examples: 20000000, 50000000. |
| `employee_limit_gte` | query | string | No | Filter by employee limit. Examples: 100, 750, 1500. |
| `employee_limit_lte` | query | string | No | Filter by employee limit. Examples: 100, 750, 1500. |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 10000) |
| `format` | query | enum: csv, json | No |  |
| `show_limits` | query | string | No | If included, size standards will be included in the response |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedNaicsCodeList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedNaicsCodeList`

---

#### `GET` /api/naics/{code}/

**Operation ID:** `naics_retrieve`

API endpoint that allows NAICS code detail lookup by code.

Use this endpoint to get information about a specific NAICS code by its code.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | integer | Yes | A unique value identifying this naics code. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `NaicsCodeDetail`
  - Content-Type: `text/csv`
  - Schema: `NaicsCodeDetail`

---

#### `GET` /api/naics/{code}/metrics/{months}/{period_grouping}/

**Operation ID:** `naics_metrics_retrieve`

Get the metrics data for the given identifier.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `months` | path | string | Yes |  |
| `period_grouping` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `NaicsCodeMetrics`
  - Content-Type: `text/csv`
  - Schema: `NaicsCodeMetrics`

---

### Notices

#### `GET` /api/notices/

**Operation ID:** `notices_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `active` | query | boolean | No | Filter active and inactive |
| `agency` | query | string | No | Filter by agency or department |
| `naics` | query | string | No | Filter by NAICS code |
| `notice_type` | query | string | No | Filter by Notice Type |
| `posted_date_after` | query | string | No | Filter by the posted date |
| `posted_date_before` | query | string | No | Filter by the posted date |
| `psc` | query | string | No | Filter by Product Service Code |
| `response_deadline_after` | query | string | No | Filter by the response deadline |
| `response_deadline_before` | query | string | No | Filter by the response deadline |
| `search` | query | string | No | Search by query |
| `set_aside` | query | string | No | Filter by Set-aside |
| `solicitation_number` | query | string | No | Search by solicitation number |
| `ordering` | query | string | No | Which field to use when ordering the results. |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedNoticeListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedNoticeListList`

---

#### `GET` /api/notices/{notice_id}/

**Operation ID:** `notices_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `notice_id` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `NoticeDetail`
  - Content-Type: `text/csv`
  - Schema: `NoticeDetail`

---

### Offices

#### `GET` /api/offices/

**Operation ID:** `offices_list`

API endpoints for offices lookup and detail.

Use an office code to retrieve information about a specific office.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `search` | query | string | No | Search for an office |
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOfficeList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOfficeList`

---

#### `GET` /api/offices/{code}/

**Operation ID:** `offices_retrieve`

API endpoint that allows office detail lookup by office code.

Use an office code to retrieve information about a specific office.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes | A unique value identifying this office. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `Office`
  - Content-Type: `text/csv`
  - Schema: `Office`

---

### Opportunities

#### `GET` /api/opportunities/

**Operation ID:** `opportunities_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `agency` | query | string | No | Filter by agency. Examples: GSA, DOD, DHS, etc.. Use \| to separate multiple values (OR logic). |
| `naics` | query | string | No | Filter by NAICS Code. Examples: 541511, 541512, etc.. Use \| to separate multiple values (OR logic). |
| `notice_type` | query | string | No | Filter by notice type. Examples: a, g, f, etc.. Use \| to separate multiple values (OR logic). |
| `place_of_performance` | query | string | No | Filter by place of performance. Examples: Washington, DC, CA, 20500, etc.. Use \| to separate multip |
| `first_notice_date_after` | query | string | No | Filter by the first notice date |
| `first_notice_date_before` | query | string | No | Filter by the first notice date |
| `last_notice_date_after` | query | string | No | Filter by the last notice date |
| `last_notice_date_before` | query | string | No | Filter by the last notice date |
| `psc` | query | string | No | Filter by PSC (Product Service Code). Examples: S222, T005, etc.. Use \| to separate multiple values |
| `response_deadline_after` | query | string | No | Filter by response deadline (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `response_deadline_before` | query | string | No | Filter by response deadline (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `set_aside` | query | string | No | Filter by set-aside type. Examples: 8A, 8AN, BICiv, etc.. Use \| to separate multiple values (OR log |
| `solicitation_number` | query | string | No | Filter by solicitation number. Examples: 12346789, A98765432, etc.. Use \| to separate multiple valu |
| `active` | query | boolean | No | Filter active and inactive |
| `search` | query | string | No | Search within a notice/opportunity's title, description, or solicitation number. Use \| to separate  |
| `ordering` | query | string | No | Filter by ordering. Examples: last_updated, posted_date, response_deadline. |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `posted_date_after` | query | string | No | Filter by posted date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `posted_date_before` | query | string | No | Filter by posted date (YYYY-MM-DD format). Examples: 2023-01-01, 2022-12-31, 2021-06-15 |
| `shape` | query | string | No | **Available Root Fields:** active, award_number, description, first_notice_date, last_notice_date, m |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOpportunityListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOpportunityListList`

---

#### `GET` /api/opportunities/{opportunity_id}/

**Operation ID:** `opportunities_retrieve`

API endpoint that allows opportunity detail lookup by opportunity ID.

Use this endpoint to get detailed information about a specific opportunity by its ID.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `opportunity_id` | path | string | Yes | A UUID string identifying this opportunity. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `OpportunityDetail`
  - Content-Type: `text/csv`
  - Schema: `OpportunityDetail`

---

### Otas

#### `GET` /api/otas/

**Operation ID:** `otas_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `uei` | query | string | No | Unique Entity Identifier |
| `naics` | query | string | No |  |
| `psc` | query | string | No |  |
| `set_aside` | query | string | No |  |
| `awarding_agency` | query | string | No | Filter by awarding agency |
| `funding_agency` | query | string | No | Filter by funding agency or department |
| `piid` | query | string | No | Award PIID |
| `search` | query | string | No | Search |
| `award_date` | query | string | No |  |
| `award_date_gte` | query | string | No |  |
| `award_date_lte` | query | string | No |  |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `pop_start_date_gte` | query | string | No |  |
| `pop_start_date_lte` | query | string | No |  |
| `pop_end_date_gte` | query | string | No | Period of performance end date on or after |
| `pop_end_date_lte` | query | string | No | Period of performance end date on or before |
| `expiring_gte` | query | string | No | Expiring on or after date (based on ultimate completion date) |
| `expiring_lte` | query | string | No | Expiring on or before date (based on ultimate completion date) |
| `recipient` | query | string | No | Search by recipient |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `ordering` | query | array | No | Ordering  * `award_date` - Award date * `-award_date` - Award date (descending) * `obligated` - Obli |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOTAListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOTAListList`

---

#### `GET` /api/otas/{key}/

**Operation ID:** `otas_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this ota. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PremiumOTADetail`
  - Content-Type: `text/csv`
  - Schema: `PremiumOTADetail`

---

### Otidvs

#### `GET` /api/otidvs/

**Operation ID:** `otidvs_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `ordering` | query | string | No | Which field to use when ordering the results. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOTIDVListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOTIDVListList`

---

#### `GET` /api/otidvs/{key}/

**Operation ID:** `otidvs_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes | A unique value identifying this otidv. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PremiumOTIDVDetail`
  - Content-Type: `text/csv`
  - Schema: `PremiumOTIDVDetail`

---

#### `GET` /api/otidvs/{key}/awards/

**Operation ID:** `otidvs_awards_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | string | Yes |  |
| `uei` | query | string | No | Unique Entity Identifier |
| `naics` | query | string | No |  |
| `psc` | query | string | No |  |
| `set_aside` | query | string | No |  |
| `awarding_agency` | query | string | No | Filter by awarding agency |
| `funding_agency` | query | string | No | Filter by funding agency or department |
| `piid` | query | string | No | Award PIID |
| `search` | query | string | No | Search |
| `award_date` | query | string | No |  |
| `award_date_gte` | query | string | No |  |
| `award_date_lte` | query | string | No |  |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `pop_start_date_gte` | query | string | No |  |
| `pop_start_date_lte` | query | string | No |  |
| `pop_end_date_gte` | query | string | No | Period of performance end date on or after |
| `pop_end_date_lte` | query | string | No | Period of performance end date on or before |
| `expiring_gte` | query | string | No | Expiring on or after date (based on ultimate completion date) |
| `expiring_lte` | query | string | No | Expiring on or before date (based on ultimate completion date) |
| `recipient` | query | string | No | Search by recipient |
| `solicitation_identifier` | query | string | No | Solicitation identifier |
| `ordering` | query | array | No | Ordering  * `award_date` - Award date * `-award_date` - Award date (descending) * `obligated` - Obli |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedOTAListList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedOTAListList`

---

### Psc

#### `GET` /api/psc/

**Operation ID:** `psc_list`

API endpoint that allows PSC codes lookup.

Use this endpoint to get a list of PSC codes by name, code, or other search criteria.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `limit` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedProductServiceCodeList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedProductServiceCodeList`

---

#### `GET` /api/psc/{code}/

**Operation ID:** `psc_retrieve`

API endpoint that allows PSC code detail lookup by code.

Use this endpoint to get information about a specific PSC code by its code.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `ProductServiceCode`
  - Content-Type: `text/csv`
  - Schema: `ProductServiceCode`

---

#### `GET` /api/psc/{code}/metrics/{months}/{period_grouping}/

**Operation ID:** `psc_metrics_retrieve`

Get the metrics data for the given identifier.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `code` | path | string | Yes |  |
| `months` | path | string | Yes |  |
| `period_grouping` | path | string | Yes |  |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PSCMetrics`
  - Content-Type: `text/csv`
  - Schema: `PSCMetrics`

---

### Schema

#### `GET` /api/schema/

**Operation ID:** `schema_retrieve`

OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: json, yaml | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/vnd.oai.openapi`
  - Schema: object
  - Content-Type: `application/yaml`
  - Schema: object
  - Content-Type: `application/vnd.oai.openapi+json`
  - Schema: object
  - Content-Type: `application/json`
  - Schema: object

---

### Subawards

#### `GET` /api/subawards/

**Operation ID:** `subawards_list`

Opt-in shaped list; otherwise defer to base viewset list.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `award_key` | query | string | No | Award key |
| `prime_uei` | query | string | No | Unique Entity Identifier |
| `sub_uei` | query | string | No | Unique Entity Identifier |
| `awarding_agency` | query | string | No | Awarding agency code |
| `funding_agency` | query | string | No | Awarding agency code |
| `fiscal_year` | query | integer | No |  |
| `fiscal_year_gte` | query | integer | No |  |
| `fiscal_year_lte` | query | integer | No |  |
| `recipient` | query | string | No | Search by recipient |
| `page` | query | integer | No | Page number for pagination (default: 1) |
| `limit` | query | integer | No | Number of results per page (max: 100) |
| `format` | query | enum: csv, json | No |  |
| `shape` | query | string | No | **Available Root Fields:** key, award_key, piid, prime_award_total_outlayed_amount, prime_award_amou |
| `flat` | query | boolean | No | **Flatten nested objects** into a single level using dot notation (or custom joiner).  When `flat=tr |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedSubawardList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedSubawardList`

---

#### `GET` /api/subawards/{key}/

**Operation ID:** `subawards_retrieve`

Opt-in shaped retrieve; otherwise defer to base viewset retrieve.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `key` | path | integer | Yes | A unique integer value identifying this subaward. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `Subaward`
  - Content-Type: `text/csv`
  - Schema: `Subaward`

---

### Subscriptions

#### `GET` /api/subscriptions/

**Operation ID:** `subscriptions_list`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `page_size` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedWebhookSubscriptionList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedWebhookSubscriptionList`

---

#### `POST` /api/subscriptions/

**Operation ID:** `subscriptions_create`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **201:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `GET` /api/subscriptions/{id}/

**Operation ID:** `subscriptions_retrieve`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `PUT` /api/subscriptions/{id}/

**Operation ID:** `subscriptions_update`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `PATCH` /api/subscriptions/{id}/

**Operation ID:** `subscriptions_partial_update`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `PatchedWebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `PatchedWebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `PatchedWebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `DELETE` /api/subscriptions/{id}/

**Operation ID:** `subscriptions_destroy`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **204:** No response body

---

#### `GET` /api/subscriptions/sample-payload/

**Operation ID:** `subscriptions_sample_payload_retrieve`

Get a sample webhook payload for testing and development.

This endpoint returns an example of what webhook payloads will look like
for different entity types and change types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `POST` /api/subscriptions/test-delivery/

**Operation ID:** `subscriptions_test_delivery_create`

Send a test webhook delivery to verify endpoint connectivity.

This endpoint allows users to test their webhook endpoint with a sample payload
before activating it for production use.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

### Version

#### `GET` /api/version/

**Operation ID:** `version_retrieve`

API endpoint to get version.

Use this endpoint to get the version of the API.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `Version`
  - Content-Type: `text/csv`
  - Schema: `Version`

---

### Webhooks

#### `GET` /api/webhooks/subscriptions/

**Operation ID:** `webhooks_subscriptions_list`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `page` | query | integer | No | A page number within the paginated result set. |
| `page_size` | query | integer | No | Number of results to return per page. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `PaginatedWebhookSubscriptionList`
  - Content-Type: `text/csv`
  - Schema: `PaginatedWebhookSubscriptionList`

---

#### `POST` /api/webhooks/subscriptions/

**Operation ID:** `webhooks_subscriptions_create`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **201:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `GET` /api/webhooks/subscriptions/{id}/

**Operation ID:** `webhooks_subscriptions_retrieve`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `PUT` /api/webhooks/subscriptions/{id}/

**Operation ID:** `webhooks_subscriptions_update`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `PATCH` /api/webhooks/subscriptions/{id}/

**Operation ID:** `webhooks_subscriptions_partial_update`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `PatchedWebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `PatchedWebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `PatchedWebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `DELETE` /api/webhooks/subscriptions/{id}/

**Operation ID:** `webhooks_subscriptions_destroy`

API endpoint for managing webhook subscriptions.

Allows listing, creating, updating and deleting webhook subscriptions.
Requires API key authentication and Large/Enterprise tier subscription.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `id` | path | string | Yes | A UUID string identifying this Webhook subscription. |
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **204:** No response body

---

#### `GET` /api/webhooks/subscriptions/sample-payload/

**Operation ID:** `webhooks_subscriptions_sample_payload_retrieve`

Get a sample webhook payload for testing and development.

This endpoint returns an example of what webhook payloads will look like
for different entity types and change types.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

#### `POST` /api/webhooks/subscriptions/test-delivery/

**Operation ID:** `webhooks_subscriptions_test_delivery_create`

Send a test webhook delivery to verify endpoint connectivity.

This endpoint allows users to test their webhook endpoint with a sample payload
before activating it for production use.

**Parameters:**

| Name | In | Type | Required | Description |
|------|-----|------|----------|-------------|
| `format` | query | enum: csv, json | No |  |

**Request Body:**

- Content-Type: `application/json`
- Schema: `WebhookSubscription`
- Content-Type: `application/x-www-form-urlencoded`
- Schema: `WebhookSubscription`
- Content-Type: `multipart/form-data`
- Schema: `WebhookSubscription`

**Responses:**

- **200:** 
  - Content-Type: `application/json`
  - Schema: `WebhookSubscription`
  - Content-Type: `text/csv`
  - Schema: `WebhookSubscription`

---

## Schemas

### APIKey

Serializer for API key

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes |  |
| `key` | string | Yes |  |
| `created` | string | Yes |  |
| `is_active` | boolean | No |  |

---

### APIUsageAlert

Serializer for API usage alerts

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | integer | Yes |  |
| `user` | integer | No |  |
| `username` | string | Yes |  |
| `name` | string | Yes |  |
| `active` | boolean | No |  |
| `alert_type` | string | Yes | * `daily_threshold` - Daily Usage Threshold * `burst_approaching` - Burst Limit Approaching * `tier_ |
| `threshold_percentage` | integer | No | Percentage threshold to trigger alert (0-100) |
| `email_enabled` | boolean | No |  |
| `webhook_url` | string | No |  |
| `last_triggered` | string | Yes |  |
| `trigger_count` | integer | Yes |  |
| `created_at` | string | Yes |  |
| `updated_at` | string | Yes |  |

---

### APIUsageHourly

Serializer for hourly API usage data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | integer | Yes |  |
| `user` | integer | Yes |  |
| `username` | string | Yes |  |
| `datetime_hour` | string | Yes |  |
| `total_requests` | integer | No |  |
| `successful_requests` | integer | No |  |
| `rate_limited_requests` | integer | No |  |
| `error_requests` | integer | No |  |
| `avg_response_time_ms` | number | No |  |
| `p95_response_time_ms` | number | No |  |
| `endpoint_breakdown` |  | No |  |
| `daily_limit` | integer | No |  |
| `rate_group` | string | No |  |

---

### AcquisitionDetails

Serializer for acquisition details with expanded choice values

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `naics_code` | integer | No |  |
| `psc_code` | string | No |  |

---

### AdditionalDetails

Serializer for additional details with expanded choice values

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `contract_type` | object | No |  |
| `idv_type` | object | No |  |
| `type_of_idc` | object | No |  |
| `total_contract_value` | number | No |  |

---

### Agency

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes |  |
| `name` | string | Yes |  |
| `abbreviation` | string | No |  |
| `department` | integer | Yes |  |

---

### AssistanceListing

Serializer for assistance listing

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `number` | string | Yes |  |
| `title` | string | Yes |  |

---

### AssistanceListingDetail

Serializer for assistance listing detail

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `number` | string | Yes |  |
| `published_date` | string | Yes |  |
| `archived_date` | string | No |  |
| `title` | string | Yes |  |
| `popular_name` | string | No |  |
| `objectives` | string | No |  |
| `applicant_eligibility` | string | No |  |
| `benefit_eligibility` | string | No |  |

---

### AwardTransaction

Serializer for award transaction

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `modification_number` | string | Yes |  |
| `transaction_date` | string | Yes |  |
| `obligated` | number | Yes |  |
| `description` | string | Yes |  |
| `action_type` | object | Yes |  |

---

### AwardsIDVSummaryMV

Serializer for the AwardsIDVSummaryMV model.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `solicitation_identifier` | string | No |  |
| `competition_details` | `CompetitionDetails` | No |  |
| `acquisition_details` | `AcquisitionDetails` | No |  |
| `additional_details` | `AdditionalDetails` | No |  |
| `description` | string | Yes |  |
| `agency_details` | object | Yes |  |
| `awardee_count` | integer | Yes |  |
| `awards_url` | string | Yes | Return the URL to the paginated awards endpoint |

---

### BusinessType

Serializer for business type

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Business types that can classify an entity |
| `code` | string | Yes | The SAM code for the business type |

---

### CompanyDocument

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `filename` | string | Yes |  |
| `url` | string | Yes |  |
| `type` | string | Yes |  |
| `updated_at` | string | Yes |  |

---

### CompanyProfile

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `company_name` | string | Yes |  |
| `uei` | string | Yes |  |
| `cage` | string | Yes |  |
| `employee_count` | integer | Yes |  |
| `website` | string | Yes |  |
| `is_popular` | boolean | Yes |  |
| `about` | string | Yes |  |
| `ai_summary` | string | Yes |  |
| `canonical_url` | string | Yes |  |
| `documents` | array of `CompanyDocument` | Yes |  |
| `documents_count` | integer | Yes |  |

---

### CompanyRAG

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `company` | `CompanyProfile` | Yes |  |
| `related_people` | array of `RelatedPerson` | Yes |  |
| `related_news` | array of `RelatedNews` | Yes |  |

---

### CompetitionDetails

Serializer for competition details with expanded choice values

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `commercial_item_acquisition_procedures` | object | No |  |
| `evaluated_preference` | object | No |  |
| `extent_competed` | object | No |  |
| `most_recent_solicitation_date` | string | No |  |
| `number_of_offers_received` | integer | No |  |
| `original_solicitation_date` | string | No |  |
| `other_than_full_and_open_competition` | object | No |  |
| `set_aside` | object | No |  |
| `simplified_procedures_for_certain_commercial_items` | object | No |  |
| `small_business_competitiveness_demonstration_program` | object | No |  |
| `solicitation_identifier` | string | No |  |
| `solicitation_procedures` | object | No |  |

---

### Contact

Serializer for contact information

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `full_name` | string | No |  |
| `title` | string | No |  |
| `email` | string | No |  |
| `phone` | string | No |  |
| `fax` | string | No |  |

---

### ContractList

Serializer for listing contracts.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `description` | string | No |  |
| `fiscal_year` | integer | Yes |  |
| `funding_office` | `Office` | Yes |  |
| `key` | string | Yes |  |
| `legislative_mandates` | `LegislativeMandates` | Yes |  |
| `naics_code` | integer | No |  |
| `obligated` | number | No |  |
| `parent_award` | `ParentAward` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `set_aside` | string | Yes |  |
| `solicitation_identifier` | string | No |  |
| `subawards_summary` | `SubawardsSummary` | Yes |  |
| `total_contract_value` | number | No |  |

---

### ContractOrIDVCompetition

Serializer for competition information

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `contract_type` | object | Yes |  |
| `extent_competed` | object | Yes |  |
| `number_of_offers_received` | integer | Yes |  |
| `other_than_full_and_open_competition` | object | Yes |  |
| `solicitation_date` | string | No |  |
| `solicitation_identifier` | string | No |  |
| `solicitation_procedures` | object | Yes |  |

---

### Department

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | integer | No |  |
| `name` | string | Yes | The Department name |
| `abbreviation` | string | No |  |

---

### EndpointUsage

Serializer for endpoint usage statistics

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `endpoints` | array of any | Yes |  |
| `total_requests` | integer | Yes |  |

---

### EntityBasic

Serializer for the most basic entity information

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `uei` | string | Yes |  |
| `display_name` | string | Yes |  |

---

### EntityDetail

Serializer for a single entity

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `uei` | string | Yes |  |
| `federal_obligations` | object | Yes |  |
| `relationships` | array of any | Yes |  |
| `registered` | string | No |  |
| `cage_code` | string | No |  |
| `dodaac` | string | No |  |
| `legal_business_name` | string | Yes |  |
| `dba_name` | string | No |  |
| `description` | string | No |  |
| `capabilities` | string | No |  |
| `keywords` | string | No |  |
| `physical_address` |  | No |  |
| `mailing_address` |  | No |  |
| `email_address` | string | No |  |
| `purpose_of_registration_code` | string | Yes |  |
| `purpose_of_registration_desc` | string | Yes |  |
| `registration_status` | string | Yes |  |
| `evs_source` | string | No |  |
| `sam_registration_date` | string | No |  |
| `last_update_date` | string | No |  |
| `sam_expiration_date` | string | No |  |
| `sam_activation_date` | string | No |  |
| `uei_status` | string | No |  |
| `uei_expiration_date` | string | No |  |
| `uei_creation_date` | string | No |  |
| `public_display_flag` | string | No |  |
| `exclusion_status_flag` | string | No |  |
| `exclusion_url` | string | No |  |
| `entity_url` | string | No |  |
| `entity_division_name` | string | No |  |
| `entity_division_number` | string | No |  |
| `entity_start_date` | string | No |  |
| `fiscal_year_end_close_date` | string | No |  |
| `submission_date` | string | No |  |
| `congressional_district` | string | No |  |
| `entity_structure_code` | string | No |  |
| `entity_structure_desc` | string | No |  |
| `entity_type_code` | string | No |  |
| `entity_type_desc` | string | No |  |
| `profit_structure_code` | string | No |  |
| `profit_structure_desc` | string | No |  |
| `organization_structure_code` | string | No |  |
| `organization_structure_desc` | string | No |  |
| `state_of_incorporation_code` | string | No |  |
| `state_of_incorporation_desc` | string | No |  |
| `country_of_incorporation_code` | string | No |  |
| `country_of_incorporation_desc` | string | No |  |
| `primary_naics` | string | No |  |
| `naics_codes` |  | No |  |
| `psc_codes` |  | No |  |
| `business_types` |  | No |  |
| `sba_business_types` |  | No |  |
| `highest_owner` |  | No |  |
| `immediate_owner` |  | No |  |

---

### EntityList

Serializer for multiple entities

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `uei` | string | Yes |  |
| `legal_business_name` | string | Yes |  |
| `dba_name` | string | No |  |
| `entity_url` | string | No |  |
| `cage_code` | string | No |  |
| `business_types` |  | No |  |
| `sba_business_types` |  | No |  |
| `primary_naics` | string | No |  |
| `physical_address` |  | No |  |
| `purpose_of_registration_code` | string | Yes |  |
| `relationships` | array of any | Yes |  |

---

### EntityMetrics

Serializer for entity metrics data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `description` | string | Yes |  |
| `warning` | string | No |  |
| `recipient` | `Recipient` | Yes |  |
| `results` | array of `MetricResult` | Yes |  |

---

### Forecast

Standard serializer for Forecast list views.

Provides the normalized fields and computed display_data
for consistent formatting across different source systems.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | integer | Yes |  |
| `source_system` | string | Yes | Source agency system (e.g., 'HHS', 'DHS') |
| `external_id` | string | Yes | Original ID from source system (UUID for HHS, numeric for DHS) |
| `agency` | string | Yes | Agency acronym (HHS, DHS, etc.) |
| `title` | string | Yes | Procurement opportunity title |
| `description` | string | No | Detailed description of the requirement |
| `anticipated_award_date` | string | No | Expected date of award |
| `fiscal_year` | integer | No | Federal fiscal year (calculated from award date) |
| `naics_code` | string | No | NAICS industry code (6 digits only) |
| `is_active` | boolean | No | Whether this opportunity is currently active |
| `status` | string | No | Status from source system (e.g., 'PUBLISHED', 'DRAFT') |
| `primary_contact` | string | Yes |  |
| `place_of_performance` | string | Yes |  |
| `estimated_period` | string | Yes |  |
| `set_aside` | string | Yes |  |
| `contract_vehicle` | string | Yes |  |

---

### ForecastDetail

Detailed serializer that includes raw data for retrieve views.

Used for detail views where the complete original data is available.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | integer | Yes |  |
| `source_system` | string | Yes | Source agency system (e.g., 'HHS', 'DHS') |
| `external_id` | string | Yes | Original ID from source system (UUID for HHS, numeric for DHS) |
| `agency` | string | Yes | Agency acronym (HHS, DHS, etc.) |
| `title` | string | Yes | Procurement opportunity title |
| `description` | string | No | Detailed description of the requirement |
| `anticipated_award_date` | string | No | Expected date of award |
| `fiscal_year` | integer | No | Federal fiscal year (calculated from award date) |
| `naics_code` | string | No | NAICS industry code (6 digits only) |
| `is_active` | boolean | No | Whether this opportunity is currently active |
| `status` | string | No | Status from source system (e.g., 'PUBLISHED', 'DRAFT') |
| `primary_contact` | string | Yes |  |
| `place_of_performance` | string | Yes |  |
| `estimated_period` | string | Yes |  |
| `set_aside` | string | Yes |  |
| `contract_vehicle` | string | Yes |  |
| `raw_data` |  | Yes | Complete original data from source system |
| `display_data` | string | Yes |  |

---

### GrantOpportunityDetail

Adds history + attachments + full synopsis text.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `grant_id` | integer | Yes |  |
| `opportunity_number` | string | Yes |  |
| `agency_code` | string | No |  |
| `status` | object | Yes |  |
| `title` | string | Yes |  |
| `description` | string | No |  |
| `important_dates` | object | No |  |
| `category` | object | Yes |  |
| `cfda_numbers` | array of `AssistanceListing` | Yes |  |
| `applicant_types` | array of object | Yes |  |
| `applicant_eligibility_description` | string | No |  |
| `funding_categories` | array of object | Yes |  |
| `funding_activity_category_description` | string | No |  |
| `funding_instruments` | array of object | Yes |  |
| `funding_details` | object | No |  |
| `grantor_contact` | object | No |  |
| `additional_info` | object | No |  |
| `last_updated` | string | Yes |  |
| `synopsis` |  | No |  |
| `forecast` |  | No |  |
| `opportunity_history` |  | No |  |

---

### GrantOpportunityList

Same fields as base (kept for symmetry).

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `grant_id` | integer | Yes |  |
| `opportunity_number` | string | Yes |  |
| `agency_code` | string | No |  |
| `status` | object | Yes |  |
| `title` | string | Yes |  |
| `description` | string | No |  |
| `important_dates` | object | No |  |
| `category` | object | Yes |  |
| `cfda_numbers` | array of `AssistanceListing` | Yes |  |
| `applicant_types` | array of object | Yes |  |
| `applicant_eligibility_description` | string | No |  |
| `funding_categories` | array of object | Yes |  |
| `funding_activity_category_description` | string | No |  |
| `funding_instruments` | array of object | Yes |  |
| `funding_details` | object | No |  |
| `grantor_contact` | object | No |  |
| `additional_info` | object | No |  |
| `last_updated` | string | Yes |  |

---

### HistoricalUsage

Serializer for historical usage data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `period` | object | Yes |  |
| `usage` | array of any | Yes |  |
| `summary` | object | Yes |  |

---

### IDVList

Serializer for listing IDVs.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `description` | string | No |  |
| `fiscal_year` | integer | Yes |  |
| `funding_office` | `Office` | Yes |  |
| `idv_type` | object | Yes |  |
| `key` | string | Yes |  |
| `legislative_mandates` | `LegislativeMandates` | Yes |  |
| `multiple_or_single_award_idv` | object | Yes |  |
| `naics_code` | integer | No |  |
| `obligated` | number | No |  |
| `parent_award` | `ParentAward` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `set_aside` | string | Yes |  |
| `solicitation_identifier` | string | No |  |
| `subawards_summary` | `SubawardsSummary` | Yes |  |
| `total_contract_value` | number | No |  |
| `type_of_idc` | object | Yes |  |

---

### IDVSummaryList

A lightweight serializer for IDVs when listed under a summary

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | string | Yes |  |
| `piid` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `award_date` | string | No |  |
| `obligated` | number | No |  |
| `total_contract_value` | number | No |  |
| `fiscal_year` | integer | No |  |
| `idv_type` | string | No |  |
| `description` | string | No |  |

---

### LegislativeMandates

Serializer for legislative mandates

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `clinger_cohen_act_planning` | object | Yes |  |
| `construction_wage_rate_requirements` | object | Yes |  |
| `employment_eligibility_verification` | object | Yes |  |
| `interagency_contracting_authority` | object | Yes |  |
| `labor_standards` | object | Yes |  |
| `materials_supplies_articles_equipment` | object | Yes |  |
| `other_statutory_authority` | object | Yes |  |
| `service_contract_inventory` | object | Yes |  |

---

### MetricResult

Serializer for individual metric results

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `year` | integer | Yes |  |
| `month` | integer | No |  |
| `quarter` | integer | No |  |
| `department` | `SimpleDepartment` | No |  |
| `agency` | `SimpleAgency` | No |  |
| `awards` | number | Yes |  |
| `subawards` | number | Yes |  |
| `rolling_avg` | number | No |  |

---

### NaicsCode

Serializer for naics code

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | integer | Yes |  |
| `description` | string | Yes | Naics Description |

---

### NaicsCodeDetail

Serializer for naics code detail

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | integer | Yes |  |
| `description` | string | Yes | Naics Description |
| `federal_obligations` | object | Yes |  |

---

### NaicsCodeMetrics

Serializer for naics code metrics data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `description` | string | Yes |  |
| `warning` | string | No |  |
| `naics_code` | `NaicsCode` | Yes |  |
| `results` | array of `MetricResult` | Yes |  |

---

### NoticeDetail

Serializer for a single notice

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `active` | boolean | Yes | Returns True if the notice is active, False otherwise. |
| `attachment_count` | integer | Yes |  |
| `award_number` | string | No |  |
| `description` | string | No |  |
| `last_updated` | string | Yes |  |
| `naics_code` | string | No |  |
| `notice_id` | string | Yes | This corresponds to the uuid in SAM.gov. You can have multiple notices for a given solicitation. |
| `opportunity` |  | Yes |  |
| `posted_date` | string | Yes |  |
| `psc_code` | string | Yes |  |
| `response_deadline` | string | Yes |  |
| `sam_url` | string | Yes |  |
| `set_aside` | string | No |  |
| `solicitation_number` | string | No |  |
| `title` | string | Yes |  |

---

### NoticeHistory

Base serializer for an opportunity's notice_history

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `index` | integer | Yes |  |
| `notice_id` | string | Yes |  |
| `latest` | boolean | Yes |  |
| `title` | string | Yes |  |
| `deleted` | boolean | Yes |  |
| `posted_date` | string | Yes |  |
| `notice_type_code` | string | Yes |  |
| `solicitation_number` | string | Yes |  |
| `parent_notice_id` | string | Yes |  |
| `related_notice_id` | string | Yes |  |

---

### NoticeList

Serializer for multiple notices

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `active` | boolean | Yes | Returns True if the notice is active, False otherwise. |
| `attachment_count` | integer | Yes |  |
| `award_number` | string | No |  |
| `description` | string | No |  |
| `last_updated` | string | Yes |  |
| `naics_code` | string | No |  |
| `notice_id` | string | Yes | This corresponds to the uuid in SAM.gov. You can have multiple notices for a given solicitation. |
| `opportunity` |  | Yes |  |
| `posted_date` | string | Yes |  |
| `psc_code` | string | Yes |  |
| `response_deadline` | string | Yes |  |
| `sam_url` | string | Yes |  |
| `set_aside` | string | No |  |
| `solicitation_number` | string | No |  |
| `title` | string | Yes |  |

---

### OTAList

Serializer for listing Other Transaction Awards.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `award_type` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `consortia` | string | No |  |
| `consortia_uei` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `extent_competed` | string | No |  |
| `fiscal_year` | integer | No |  |
| `funding_office` | `Office` | Yes |  |
| `key` | string | Yes |  |
| `non_governmental_dollars` | number | No |  |
| `non_traditional_government_contractor_participation` | string | No |  |
| `parent_award` | `OTIDVParentAward` | Yes |  |
| `parent_award_modification_number` | string | No |  |
| `period_of_performance` | `PeriodOfPerformance` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `type_of_ot_agreement` | string | No |  |

---

### OTIDVList

Serializer for listing Other Transaction IDVs.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `consortia` | string | No |  |
| `consortia_uei` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `extent_competed` | string | No |  |
| `fiscal_year` | integer | No |  |
| `funding_office` | `Office` | Yes |  |
| `idv_type` | string | No |  |
| `key` | string | Yes |  |
| `non_governmental_dollars` | number | No |  |
| `non_traditional_government_contractor_participation` | string | No |  |
| `period_of_performance` | `PeriodOfPerformance` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `type_of_ot_agreement` | string | No |  |

---

### OTIDVParentAward

Serializer for parent award (OTIDV) summary information

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `description` | string | No |  |
| `idv_type` | string | No |  |
| `key` | string | Yes |  |
| `piid` | string | No |  |

---

### Office

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes |  |
| `name` | string | No |  |
| `agency` | string | Yes |  |

---

### OpportunityAttachment

Base serializer for opportunity attachments

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `attachment_id` | string | Yes |  |
| `mime_type` | string | Yes |  |
| `name` | string | Yes |  |
| `posted_date` | string | Yes |  |
| `resource_id` | string | Yes |  |
| `type` | string | Yes |  |
| `url` | string | Yes |  |

---

### OpportunityDetail

Serializer for a single opportunity

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `active` | boolean | No |  |
| `attachments` | array of `OpportunityAttachment` | Yes |  |
| `award_number` | string | No |  |
| `description` | string | Yes |  |
| `first_notice_date` | string | Yes |  |
| `last_notice_date` | string | Yes |  |
| `meta` | object | Yes |  |
| `naics_code` | integer | No |  |
| `notice_history` | array of `NoticeHistory` | Yes |  |
| `office` | `Office` | Yes |  |
| `opportunity_id` | string | Yes |  |
| `place_of_performance` |  | No |  |
| `primary_contact` | `Contact` | No |  |
| `psc_code` | string | No |  |
| `response_deadline` | string | Yes |  |
| `sam_url` | string | Yes |  |
| `set_aside` | object | Yes |  |
| `solicitation_number` | string | No |  |
| `title` | string | Yes |  |

---

### OpportunityList

Serializer for multiple opportunities

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `active` | boolean | No |  |
| `award_number` | string | No |  |
| `first_notice_date` | string | Yes |  |
| `last_notice_date` | string | Yes |  |
| `meta` | object | Yes |  |
| `naics_code` | integer | No |  |
| `office` | `Office` | Yes |  |
| `opportunity_id` | string | Yes |  |
| `place_of_performance` |  | No |  |
| `psc_code` | string | No |  |
| `response_deadline` | string | Yes |  |
| `sam_url` | string | Yes |  |
| `set_aside` | object | Yes |  |
| `solicitation_number` | string | No |  |
| `title` | string | Yes |  |

---

### OpportunityRef

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `opportunity_id` | string | Yes |  |
| `link` | string | Yes |  |

---

### PSCMetrics

Serializer for psc code metrics data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `description` | string | Yes |  |
| `warning` | string | No |  |
| `psc_code` | `ProductServiceCodeSimple` | Yes |  |
| `results` | array of `MetricResult` | Yes |  |

---

### PaginatedAPIUsageAlertList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `APIUsageAlert` | Yes |  |

---

### PaginatedAPIUsageHourlyList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `APIUsageHourly` | Yes |  |

---

### PaginatedAgencyList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `Agency` | Yes |  |

---

### PaginatedAssistanceListingList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `AssistanceListing` | Yes |  |

---

### PaginatedAwardTransactionList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `AwardTransaction` | Yes |  |

---

### PaginatedBusinessTypeList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `BusinessType` | Yes |  |

---

### PaginatedContractListList

**Type:** array

---

### PaginatedDepartmentList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `Department` | Yes |  |

---

### PaginatedEntityListList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `EntityList` | Yes |  |

---

### PaginatedForecastList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `Forecast` | Yes |  |

---

### PaginatedGrantOpportunityListList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `GrantOpportunityList` | Yes |  |

---

### PaginatedIDVListList

**Type:** array

---

### PaginatedIDVSummaryListList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `IDVSummaryList` | Yes |  |

---

### PaginatedNaicsCodeList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `NaicsCode` | Yes |  |

---

### PaginatedNoticeListList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `NoticeList` | Yes |  |

---

### PaginatedOTAListList

**Type:** array

---

### PaginatedOTIDVListList

**Type:** array

---

### PaginatedOfficeList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `Office` | Yes |  |

---

### PaginatedOpportunityListList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `OpportunityList` | Yes |  |

---

### PaginatedProductServiceCodeList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `ProductServiceCode` | Yes |  |

---

### PaginatedSubawardList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `Subaward` | Yes |  |

---

### PaginatedWebhookSubscriptionList

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `next` | string | No |  |
| `previous` | string | No |  |
| `results` | array of `WebhookSubscription` | Yes |  |

---

### ParentAward

Serializer for parent award (IDV) summary information

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `description` | string | No |  |
| `idv_type` | string | No |  |
| `key` | string | Yes |  |
| `piid` | string | No |  |

---

### PatchedAPIUsageAlert

Serializer for API usage alerts

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | integer | No |  |
| `user` | integer | No |  |
| `username` | string | No |  |
| `name` | string | No |  |
| `active` | boolean | No |  |
| `alert_type` | string | No | * `daily_threshold` - Daily Usage Threshold * `burst_approaching` - Burst Limit Approaching * `tier_ |
| `threshold_percentage` | integer | No | Percentage threshold to trigger alert (0-100) |
| `email_enabled` | boolean | No |  |
| `webhook_url` | string | No |  |
| `last_triggered` | string | No |  |
| `trigger_count` | integer | No |  |
| `created_at` | string | No |  |
| `updated_at` | string | No |  |

---

### PatchedWebhookSubscription

Serializer for WebhookSubscription model.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | No |  |
| `endpoint` | string | No |  |
| `subscription_name` | string | No | The name of the subscription |
| `payload` |  | No | The payload of the subscription |
| `created_at` | string | No |  |
| `entity_type` | string | No |  |
| `entity_ids` | array of string | No |  |
| `change_types` | array of string | No |  |

---

### PeriodOfPerformance

Serializer for period of performance

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `start_date` | string | Yes |  |
| `current_end_date` | string | Yes |  |
| `ultimate_completion_date` | string | Yes |  |

---

### PlaceOfPerformance

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `country_code` | string | Yes |  |
| `country_name` | string | Yes |  |
| `state_code` | string | No |  |
| `state_name` | string | Yes |  |
| `city_name` | string | No |  |
| `zip_code` | string | No |  |

---

### PremiumContractDetail

Premium serializer for a single contract

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `commercial_item_acquisition_procedures` | object | Yes |  |
| `competition` | `ContractOrIDVCompetition` | Yes |  |
| `consolidated_contract` | object | Yes |  |
| `contingency_humanitarian_or_peacekeeping_operation` | string | No |  |
| `contract_bundling` | object | Yes |  |
| `contract_financing` | string | No |  |
| `cost_accounting_standards_clause` | object | Yes |  |
| `cost_or_pricing_data` | string | No |  |
| `description` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `dod_transaction_number` | integer | No |  |
| `domestic_or_foreign_entity` | object | Yes |  |
| `epa_designated_product` | object | Yes |  |
| `evaluated_preference` | object | Yes |  |
| `fair_opportunity_limited_sources` | object | Yes |  |
| `fed_biz_opps` | string | No |  |
| `fiscal_year` | integer | Yes |  |
| `foreign_funding` | string | No |  |
| `funding_office` | `Office` | Yes |  |
| `government_furnished_property` | string | No |  |
| `information_technology_commercial_item_category` | object | Yes |  |
| `inherently_governmental_functions` | object | Yes |  |
| `key` | string | Yes |  |
| `legislative_mandates` | `LegislativeMandates` | Yes |  |
| `local_area_set_aside` | string | No |  |
| `major_program` | string | No |  |
| `naics_code` | integer | No |  |
| `number_of_actions` | integer | No |  |
| `number_of_offers_source` | string | No |  |
| `obligated` | number | No |  |
| `parent_award` | `ParentAward` | Yes |  |
| `performance_based_service_acquisition` | string | No |  |
| `piid` | string | No |  |
| `place_of_manufacture` | object | Yes |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `price_evaluation_percent_difference` | string | No |  |
| `psc_code` | string | No |  |
| `purchase_card_as_payment_method` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `recovered_materials_sustainability` | string | No |  |
| `research` | object | Yes |  |
| `sam_exception` | object | Yes |  |
| `set_aside` | string | Yes |  |
| `simplified_procedures_for_certain_commercial_items` | string | No |  |
| `small_business_competitiveness_demonstration_program` | string | No |  |
| `solicitation_identifier` | string | No |  |
| `subawards_summary` | `SubawardsSummary` | Yes |  |
| `subcontracting_plan` | object | Yes |  |
| `total_contract_value` | number | No |  |
| `tradeoff_process` | object | Yes |  |
| `type_of_set_aside_source` | string | No |  |
| `undefinitized_action` | string | No |  |

---

### PremiumIDVDetail

Premium serializer for a single IDV with all details.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `commercial_item_acquisition_procedures` | object | Yes |  |
| `competition` | `ContractOrIDVCompetition` | Yes |  |
| `consolidated_contract` | object | Yes |  |
| `contingency_humanitarian_or_peacekeeping_operation` | string | No |  |
| `contract_bundling` | object | Yes |  |
| `contract_financing` | string | No |  |
| `cost_accounting_standards_clause` | object | Yes |  |
| `cost_or_pricing_data` | string | No |  |
| `description` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `dod_transaction_number` | integer | No |  |
| `domestic_or_foreign_entity` | object | Yes |  |
| `email_address` | string | No |  |
| `epa_designated_product` | object | Yes |  |
| `evaluated_preference` | object | Yes |  |
| `fair_opportunity_limited_sources` | object | Yes |  |
| `fed_biz_opps` | string | No |  |
| `fee_range_lower_value` | integer | No |  |
| `fee_range_upper_value` | integer | No |  |
| `fiscal_year` | integer | Yes |  |
| `fixed_fee_value` | number | No |  |
| `foreign_funding` | string | No |  |
| `funding_office` | `Office` | Yes |  |
| `government_furnished_property` | string | No |  |
| `idv_type` | object | Yes |  |
| `idv_website` | string | No |  |
| `inherently_governmental_functions` | object | Yes |  |
| `key` | string | Yes |  |
| `legislative_mandates` | `LegislativeMandates` | Yes |  |
| `local_area_set_aside` | string | No |  |
| `major_program` | string | No |  |
| `multiple_or_single_award_idv` | object | Yes |  |
| `naics_code` | integer | No |  |
| `number_of_actions` | integer | No |  |
| `number_of_offers_source` | string | No |  |
| `obligated` | number | No |  |
| `ordering_procedure` | string | No |  |
| `parent_award` | `ParentAward` | Yes |  |
| `performance_based_service_acquisition` | string | No |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `program_acronym` | string | No |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `recovered_materials_sustainability` | string | No |  |
| `research` | object | Yes |  |
| `sam_exception` | object | Yes |  |
| `set_aside` | string | Yes |  |
| `simplified_procedures_for_certain_commercial_items` | string | No |  |
| `small_business_competitiveness_demonstration_program` | string | No |  |
| `solicitation_identifier` | string | No |  |
| `subawards_summary` | `SubawardsSummary` | Yes |  |
| `subcontracting_plan` | object | Yes |  |
| `total_contract_value` | number | No |  |
| `total_estimated_order_value` | number | No |  |
| `tradeoff_process` | object | Yes |  |
| `type_of_fee_for_use_of_service` | string | No |  |
| `type_of_idc` | object | Yes |  |
| `undefinitized_action` | string | No |  |
| `who_can_use` | string | No |  |

---

### PremiumOTADetail

Detailed serializer for Other Transaction Awards with premium data.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `award_type` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `consortia` | string | No |  |
| `consortia_uei` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `extent_competed` | string | No |  |
| `fiscal_year` | integer | No |  |
| `funding_office` | `Office` | Yes |  |
| `key` | string | Yes |  |
| `non_governmental_dollars` | number | No |  |
| `non_traditional_government_contractor_participation` | string | No |  |
| `parent_award` | `OTIDVParentAward` | Yes |  |
| `parent_award_modification_number` | string | No |  |
| `period_of_performance` | `PeriodOfPerformance` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `type_of_ot_agreement` | string | No |  |

---

### PremiumOTIDVDetail

Detailed serializer for Other Transaction IDVs with premium data.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_date` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `base_and_exercised_options_value` | number | No |  |
| `consortia` | string | No |  |
| `consortia_uei` | string | No |  |
| `dod_acquisition_program` | string | No |  |
| `extent_competed` | string | No |  |
| `fiscal_year` | integer | No |  |
| `funding_office` | `Office` | Yes |  |
| `idv_type` | string | No |  |
| `key` | string | Yes |  |
| `non_governmental_dollars` | number | No |  |
| `non_traditional_government_contractor_participation` | string | No |  |
| `period_of_performance` | `PeriodOfPerformance` | Yes |  |
| `piid` | string | No |  |
| `place_of_performance` | `PlaceOfPerformance` | Yes |  |
| `psc_code` | string | No |  |
| `recipient` | `EntityBasic` | Yes |  |
| `type_of_ot_agreement` | string | No |  |

---

### ProductServiceCode

Serializer for product service code

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes |  |
| `parent` | string | No |  |
| `level_1_category` | string | No |  |
| `level_1_category_code` | integer | No |  |
| `level_2_category` | string | No |  |
| `level_2_category_code` | string | No |  |

---

### ProductServiceCodeSimple

Serializer for product service code simple

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes |  |
| `description` | string | Yes |  |

---

### Recipient

Serializer for recipient information from EntitiesNamesMV

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `uei` | string | Yes |  |
| `display_name` | string | Yes |  |

---

### RelatedNews

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes |  |
| `preview` | string | Yes |  |
| `stringified` | string | Yes |  |
| `url` | string | Yes |  |
| `published_at` | string | Yes |  |
| `source` | string | Yes |  |

---

### RelatedPerson

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `first_name` | string | Yes |  |
| `last_name` | string | Yes |  |
| `job_title` | string | Yes |  |
| `email` | string | Yes |  |

---

### SimpleAgency

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes |  |
| `name` | string | Yes |  |
| `abbreviation` | string | No |  |

---

### SimpleDepartment

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | integer | No |  |
| `name` | string | Yes | The Department name |
| `abbreviation` | string | No |  |

---

### Subaward

Serializer for subawards.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `award_key` | string | No |  |
| `awarding_office` | `Office` | Yes |  |
| `fsrs_details` | object | Yes |  |
| `funding_office` | `Office` | Yes |  |
| `key` | integer | Yes |  |
| `piid` | string | Yes |  |
| `place_of_performance` | object | Yes |  |
| `prime_recipient` | `EntityBasic` | Yes |  |
| `subaward_details` | object | Yes |  |
| `subaward_recipient` | `EntityBasic` | Yes |  |

---

### SubawardsSummary

Serializer for subawards summary

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes |  |
| `total_amount` | number | Yes |  |

---

### UsageSummary

Serializer for current usage summary

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `current_period` | object | Yes |  |
| `today` | object | Yes |  |
| `recommendations` | object | Yes |  |

---

### Version

Serializer for version data

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `version` | string | Yes |  |
| `date` | string | Yes |  |

---

### WebhookSubscription

Serializer for WebhookSubscription model.

**Type:** object

**Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes |  |
| `endpoint` | string | Yes |  |
| `subscription_name` | string | No | The name of the subscription |
| `payload` |  | No | The payload of the subscription |
| `created_at` | string | Yes |  |
| `entity_type` | string | No |  |
| `entity_ids` | array of string | No |  |
| `change_types` | array of string | No |  |

---
