import { useCallback, useMemo, useState } from 'react'
import _ from 'lodash'
import { FaPlus } from 'react-icons/fa'
//====================================================================

import Search from '../../../components/Search'
import { useAppSelector } from '../../../../../redux'
import { CmsLandingPageComponentCard, ComponentCreateEditForm } from "../components"
import { useFirebaseCustomerListener } from '../../../utils/firebase/customer'
import { CustomSimpleModal, PageProgress } from '../../../../../components'
import { INIT_CUSTOMER_SITE_COMPONENT, TComponentItem } from '../../../../../types/component'

type TCorpusModal = { action: 'create' | 'edit' | '', value: TComponentItem, open: boolean }
type TCorpus = { modal: TCorpusModal, search: string }
const INIT_CORPUS_MODAL: TCorpusModal = { action: '', value: INIT_CUSTOMER_SITE_COMPONENT, open: false }
const INIT_CORPUS: TCorpus = { modal: INIT_CORPUS_MODAL, search: '' }
export default function LandingPage() {
    useFirebaseCustomerListener()
    const { loading, value } = useAppSelector((state) => state.Cms.CustomerSiteComponent)
    const [corpus, setCorpus] = useState(INIT_CORPUS)

    const onChangeModal = useCallback((newValue: Partial<TCorpusModal>) => {
        setCorpus((prev) => ({
            ...prev,
            modal: { ...prev.modal, ...newValue, },
        }))
    }, [])
    const components = useMemo(() => {
        return _.sortBy(value?.filter((item) =>
            corpus.search?.length
                ? _.lowerCase(item.name)?.includes(_.lowerCase(corpus.search))
                : true
        ), 'orderId')
    }, [corpus.search, value]);

    return (
        <div>
            <Search placeholder="Search Components.." onChange={(search) => {
                setCorpus((prev) => ({ ...prev, search }))
            }} />
            {loading ? (<PageProgress />) : (
                <div className="mt-10">
                    {components?.length ? (
                        <div className="gap-6 grid grid-cols-2 md:grid-cols-3 max-w-screen-2xl mx-auto place-items-start">
                            {components?.map((item, i) => {
                                return <CmsLandingPageComponentCard key={i} item={item}
                                    onEdit={(id) => {
                                        onChangeModal({
                                            action: 'edit',
                                            open: true,
                                            value: components?.find((row) => row.id === id)
                                        })

                                    }}
                                    onRemove={(e) => {
                                        console.log(e)
                                    }}
                                />
                            })}
                        </div>
                    ) : (
                        <div className="flex flex-row justify-center h-20 align-middle">
                            Not found
                        </div>
                    )}
                </div>
            )}
            <div
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                   flex gap-3"
                onClick={() => {
                    onChangeModal({ open: true, action: 'create' })
                }}
            >
                <FaPlus className="w-3 h-3 my-auto" />
                Add Component
            </div>

            <CustomSimpleModal
                show={corpus.modal.open}
                onHide={() => {
                    onChangeModal(INIT_CORPUS_MODAL)
                }}
                label={`${_.upperFirst(corpus.modal.action)} Component`}
            >
                <ComponentCreateEditForm item={corpus.modal.value} />
            </CustomSimpleModal>
        </div>
    )
}
