import React from 'react'

export const ForwardingComponent = () => {

  const [forwards, setForwards] = useState([])

  const navigator = useNavigate();

  useEffect(() => {   /* add forward */
      getAllForwards();

  },[])

  function getAllForwards(){
      listForwards().then((response) => {
          setForwards(response.data);
      }).catch(error => {
          console.error(error);
      })
  }

  function addNewForwards(){  {/* add forward butonu için oluşturduğumuz fonksiyon */}
      navigator('/add-forward')
  }

  function updateForward(id){
      navigator(`/edit-forward/${id}`)
  }

  function removeForward(id){
      console.log(id);

      deleteForward(id).then((response) =>{
          getAllForwards();
      }).catch(error => {
          console.error(error);
      })
  }

  return (
    <div className='.container'>
        <h2 className='text-center'>Sevkiyat Oluştur</h2> 
        <button className='btn btn-primary mb-2' onClick={addNewForwards}>Sevkiyat Oluştur</button>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>

            </tr>
        </thead>
        <tbody>
            {
                forwards.map(forward =>
                    <tr key = {forward.id}>
                        <td>{forward.id}</td>
                        <td>{forward.firstName}</td>
                        <td>{forward.lastName}</td>
                        <td>{forward.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateForward(employee.id)}>Güncelle</button>
                            <button className='btn btn-danger' onClick={() => removeForward(employee.id)}
                                style={{marginLeft: '10px'}}
                            >Sil</button>
                        </td>
                        
                    </tr>)
            }
        </tbody>
    </table>



    </div>

   

    
  )
}

export default ForwardingComponent